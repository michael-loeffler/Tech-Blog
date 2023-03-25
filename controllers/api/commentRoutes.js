const router = require('express').Router();
const { Comment, Post, User } = require('../../models')
const withAuth = require('../../utils/auth');

//import sequelize
const sequelize = require('../../config/connection');

router.post('/', async (req, res) => {
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

// will need withAuth for post route for new comments 

module.exports = router;