const express = require('express');
const router = new express.Router();
const userController = require('../controller/userController');
const reqValidator = require('../middleware/reqValidator');
const userSchema = require('../requestLayouts/userLayout');


router.post('/signup',
  reqValidator.validateBody(userSchema.signup),
  userController.signup
);

module.exports = router;