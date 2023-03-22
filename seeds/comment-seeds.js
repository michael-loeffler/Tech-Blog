const { Comment } = require('../models');

const commentData = [
  {
    content: 'Comment - M',
    user_id: 1,
    post_id: 1,
  },
  {
    content: 'Comment - S',
    user_id: 2,
    post_id: 2,
  },
  {
    content: 'Comment - B',
    user_id: 3,
    post_id: 1,
  },
  {
    content: 'Comment - S',
    user_id: 2,
    post_id: 2,
  },
  {
    content: 'Comment - M',
    user_id: 1,
    post_id: 1,
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
