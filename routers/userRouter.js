const userController = require('../controllers/userController');
const express =  require('express');
const userRouter = express.Router();
const authMiddleware = require('../middlewares/auth-user');

userRouter.use(authMiddleware);

userRouter.get('/all' , userController.getAllUsers);
userRouter.get('/:userId' , userController.getUserById);
userRouter.get('/:searchParams',userController.searchUsers);
userRouter.post('/changePic', userController.changeUserPicture);


// mainRouter.get('/api/users' , userController.getAllUsers);
// mainRouter.get('/api/user/:id', userController.getUserById);
// mainRouter.get('/api/users/:searchParams' ,userController.searchUsers);
// mainRouter.post('/api/users/picture' , userController.changeUserPicture);

module.exports = userRouter;
