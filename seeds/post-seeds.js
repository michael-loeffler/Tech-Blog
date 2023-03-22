const { Post } = require('../models');

const postData = [
  {
    title: 'My Favorite Treats',
    content: 'CHEESE, STICK, FRIES, DOODLES, PETZELS, PEANUT BUTTER, TURKEY, BREAD',
    user_id: 3,
  },
  {
    title: 'The healing power of cross-stitch',
    content: 'Benefits include: relaxation, creative outlet, tactile experience, great background activity, helps with car sickness',
    user_id: 2,
  },
  {
    title: 'Thanos wuz right',
    content: 'I saw a whale in the Hudson',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
