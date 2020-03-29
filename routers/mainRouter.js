const express =  require('express');
const postRouter = require('./postRouter');
const authRouter = require('./authRouter');
const userRouter = require('./userRouter');
const mainRouter = express.Router();

// mainRouter.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Credentials", true)
//     next();
//   });

mainRouter.use('/api/posts', postRouter);
mainRouter.use('/api/users', userRouter);
mainRouter.use('/api/auth' , authRouter);

module.exports = mainRouter;
