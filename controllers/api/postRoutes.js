const router = require('express').Router();
const { Comment, Post, User } = require('../../models')
const withAuth = require('../../utils/auth');

//import sequelize
const sequelize = require('../../config/connection');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{model: Comment, include:[{model: User, attributes: {exclude: ['password']}}]}, {model: User, attributes: { exclude: ['password'] }}],
      
      //order: [['post_name', 'ASC']]
    })
    const posts = postData.map((post) => post.get({plain: true}))
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;