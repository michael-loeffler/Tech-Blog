const router = require('express').Router();
const { Comment, Post, User } = require('../../models')
const withAuth = require('../../utils/auth');

//import sequelize
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
    try {
    const commentData = await Comment.findAll({
      include: [User, Post], 
      attributes: { exclude: ['password'] },
      //order: [['comment_name', 'ASC']]
    })

    res.status(200).json(commentData);
    // const comments = commentData.map((comment) => comment.get({plain: true}))

    // res.status(200).render('homepage', {comments})
  } catch (err) { 
    res.status(400).json(err)
  }
  });

  module.exports = router;