const express = require('express');
const router = new express.Router();
const userController = require('../controller/userController');

router.post('/signup',
//   joiSchemaValidation.validateBody(userSchema.signup),
  userController.signup
);

module.exports = router;