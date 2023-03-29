const { User } = require('../models');

const userData = [
    {
        name: 'Tech Loeffler',
        username: "tech_loeff",
        password: 'password123',
    },
    {
        name: 'Michael Loeffler',
        username: "michaelloeffler23",
        password: 'password123',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
