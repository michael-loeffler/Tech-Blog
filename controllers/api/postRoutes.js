const router = require('express').Router();
const { Comment, Post, User } = require('../../models')
const withAuth = require('../../utils/auth');

//import sequelize
const sequelize = require('../../config/connection');

router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id
    });
    res.status(200).json({ message: 'New post successfully created', post: postData });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:postId', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        user_id: req.session.user_id,
        id: req.params.postId
      }
    });

    if (!postData) {
      res.status(404).json({ message: `No post found with this id(${req.params.postId})!` });
      return;
    }

    res.status(200).json({ message: 'Post successfully deleted', post: postData });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:postId', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          // user_id: req.session.user_id,
          id: req.params.postId
        }
      }
    );
    res.status(200).json({ message: 'Post successfully updated', post: postData });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: Comment, include: [{ model: User, attributes: { exclude: ['password'] } }] }, { model: User, attributes: { exclude: ['password'] } }],

      //order: [['post_name', 'ASC']]
    })
    const posts = postData.map((post) => post.get({ plain: true }))
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/:postId', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.postId, {
      include: [{ model: Comment, include: [{ model: User, attributes: { exclude: ['password'] } }] }, { model: User, attributes: { exclude: ['password'] } }],

      //order: [['post_name', 'ASC']]
    })
    const post = postData.get({ plain: true })
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;