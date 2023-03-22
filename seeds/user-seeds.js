const { User } = require('../models');

const userData = [
    {
        name: 'Michael Loeffler',
        username: "mloeff",
        password: '2363Michael!8747',
    },
    {
        name: 'Sarah Loeffler',
        username: "sloeff",
        password: '2363Sarah!8747',
    },
    {
        name: 'Bella Loeffler',
        username: "bloeff",
        password: '2363Bella!8747',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
