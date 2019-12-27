const User = require('../database/model/user');
const constants = require('../constants');
const { formatMongoData } = require('../helper/dbHelper');
const bcrypt = require('bcryptjs');

const signup = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email });
    if (user) {
      throw new Error(constants.userMessage.DUPLICATE_EMAIL);
    }
    password = await bcrypt.hash(password, 8);
    const newUser = new User({ email, password });
    let result = await newUser.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Something went wrong: Service: signup', error);
    throw new Error(error);
  }
}

module.exports ={
    signup: signup
}