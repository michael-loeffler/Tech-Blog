const router = require('express').Router();
const { Comment, Post, User } = require('../../models')
const withAuth = require('../../utils/auth');

//import sequelize
const sequelize = require('../../config/connection');

router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });
    res.status(200).json({ message: 'New comment successfully created', comment: commentData });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:commentId', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        user_id: req.session.user_id,
        id: req.params.commentId
      }
    });

    if (!commentData) {
      res.status(404).json({ message: `No comment found with this id(${req.params.commentId})!` });
      return;
    }

    res.status(200).json({ message: 'Comment successfully deleted', comment: commentData });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [{ model: User, attributes: { exclude: ['password'] }, }],
    })
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// router.get('/:commentId', async (req, res) => {
//   try {
//     const commentData = await Comment.findByPk(req.params.commentId, {
//       include: [{ model: User, attributes: { exclude: ['password'] }, }],
//     })
//     const comment = commentData.get({ plain: true })
//     res.status(200).json(comment);
//   } catch (err) {
//     res.status(400).json(err)
//   }
// });

module.exports = router;