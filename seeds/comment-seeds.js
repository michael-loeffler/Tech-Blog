const { Comment } = require('../models');

const commentData = [
  {
    content: 'We just went over this in my class! I thought it was really cool. My instructor showed us this really great visualization of the Bubble Sort and it really helped me wrap my head around what what going on: https://algorithm-visualizer.org/brute-force/bubble-sort',
    user_id: 2,
    post_id: 1,
  },
  {
    content: 'Yes, cannot recommend Handlebars enough! It is so much easier to build websites with multiple pages and have the page dynamically adjust to the data you are feeding into it.',
    user_id: 1,
    post_id: 2,
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
