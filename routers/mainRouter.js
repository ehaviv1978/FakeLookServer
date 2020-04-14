const express =  require('express');
const postRouter = require('./postRouter');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const mainRouter = express.Router();

mainRouter.use('/api/posts', postRouter);
mainRouter.use('/api/users', userRouter);
mainRouter.use('/api/auth' , authRouter);

module.exports = mainRouter;
