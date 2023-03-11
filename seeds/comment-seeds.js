const { Comment } = require('../models');

const commentData = [
  {
    content: 'Shirts',
    user_id: 1,
    post_id: 1,
  },
  {
    content: 'Shorts',
    user_id: 2,
    post_id: 2,
  },
  {
    content: 'Music',
    user_id: 3,
    post_id: 1,
  },
  {
    content: 'Hats',
    user_id: 2,
    post_id: 2,
  },
  {
    content: 'Shoes',
    user_id: 1,
    post_id: 1,
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
