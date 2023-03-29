const { Post } = require('../models');

const postData = [
  {
    title: 'The Bubble Sort',
    content: 'The bubble sort is one of many different methodologies used to sort numbers in an array. It accomplishes this by comparing two array elements next to each other, and if the one on the left is greater than the one on the right, the two values are swapped. The first pass through of the array will move the largest value all the way to the right, however that does not mean that the rest of the values are in numerical order. Therefore, the function will loop over the array over an over until all array elements are in the correct order from smallest to largest. Because there is a possibility that the sorting function will have to execute n times (where n is the length of the array), and each time it has to check each value in the array (also n), this sort methodology has a Worst Case Time Complexity of O(n^2).',
    user_id: 1,
  },
  {
    title: 'The Benefits of Handlebars Templates',
    content: 'Handlebars Templates allow developers the flexibility to serve up different HTML templates with variable data depending on the situation. There are built in helpers that allow you to loop over an array of objects when you want to repeat an HTML block for every object in that array ({{#each}}), or allow you to implement logic statements that only display pieces of HTML when certain conditions are met ({{#if}}). Handlebars typically powers the V (View) portion of the MVC framework.',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
