const request = require('supertest');
const app = require('../src/app');
const User = require('../src/database/model/user');

const { userOneId, userOne, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should signup a new user', async () => {
    const response = await request(app).post('/api/v1/user/signup').send({
        ...userOne
    }).expect(200)
    console.log(response);
//Start Debugging from here
    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user.id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Auritra Pal',
            email: 'auri1251@gmail.com'
        }
    })
    
    expect(user.password).not.toBe('arijan1@3');

    expect(user.password).toBe('aUrijan1@3');
})
