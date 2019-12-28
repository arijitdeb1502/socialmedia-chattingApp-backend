const mongoose = require('mongoose');
const User = require('../../src/database/model/user');

const userOne = {
    name: 'Auritra Pal',
    email: 'auri1251@gmail.com',
    password: 'aUrijan1@3',
    age: 31
};

const userTwo = {
    name: 'Arijit Deb',
    email: 'auri1251@gmail.com',
    password: 'aRijan1@3',
    age: 36
};

const setupDatabase = async () => {
    await User.deleteMany();
}

module.exports = {
    userOne,
    userTwo,
    setupDatabase
}