const { Comment } = require('../models');

const commentData = [
  {
    content: 'We like fries!!!!!!!!!',
    user_id: 1,
    post_id: 1,
  },
  {
    content: 'Nerrrrrrrrrdddddddddddddddd',
    user_id: 2,
    post_id: 3,
  },
  {
    content: 'Thank u daddie',
    user_id: 3,
    post_id: 1,
  },
  {
    content: 'Love sharing my doodles with you Bellie!!',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'We love the stitch! My brother went to the stitch!!',
    user_id: 1,
    post_id: 2,
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
