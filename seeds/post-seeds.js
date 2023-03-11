const { Post } = require('../models');

const postData = [
  {
    title: 'Plain T-Shirt',
    content: 'lemme get aaaa Plain T-Shirt',
    user_id: 3,
  },
  {
    title: 'Running Sneakers',
    content: 'Yeah so Running Sneakers',
    user_id: 2,
  },
  {
    title: 'Branded Baseball Hat',
    content: 'Branded. Baseball. Hat. In this essay I will',
    user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
