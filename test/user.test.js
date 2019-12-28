const request = require('supertest');
const app = require('../src/app');
const User = require('../src/database/model/user');

const { userOneId, userOne, userTwo , setupDatabase } = require('./fixtures/db');

beforeAll(setupDatabase);

test('Should signup a new user', async () => {
    const response = await request(app).post('/api/v1/user/signup').send({
        ...userOne
    }).expect(200)

    const user = await User.find( {
            email: response.body.body.email
        }
    )

    expect(user).not.toBe(null);
    expect(user.length).toBe(1);
    expect(user[0].name).toBe('Auritra Pal');
    expect(user[0].email).toBe('auri1251@gmail.com');
    expect(user[0].age).toBe(31);

})

test('Cannot signup a user with Duplicate email id', async () => {
    const response = await request(app).post('/api/v1/user/signup').send({
        ...userTwo
    }).expect(400)

    const user = await User.find( {
            email: response.body.body.email
        }
    )

    expect(user.length).toBe(0);

})
