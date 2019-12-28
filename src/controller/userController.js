const constants = require('../constants');
const userService = require('../service/userService');

const signup = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await userService.signup(req.body);
    response.status = 200;
    response.message = constants.userMessage.SIGNUP_SUCCESS;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: userController: signup', error);
    response.message = error.message;
  }
  return res.status(response.status).send(response);
}

module.exports = {
    signup: signup
}
