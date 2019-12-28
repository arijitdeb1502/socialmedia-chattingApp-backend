const Joi = require('@hapi/joi');

const signup = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  age: Joi.number().required()
});

module.exports = {
    signup: signup
}