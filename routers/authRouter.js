const authController = require('../controllers/authController');
const express =  require('express');
const authRouter = express.Router();

authRouter.post('/register',authController.addUser);
authRouter.post('/login',authController.userLogIn);

module.exports = authRouter;
