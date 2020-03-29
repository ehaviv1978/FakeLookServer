const userController = require('../controllers/userController');
const express =  require('express');
const userRouter = express.Router();
const authMiddleware = require('../middlewares/auth-user');

userRouter.use(authMiddleware);

userRouter.get('/all' , userController.getAllUsers);
userRouter.get('/:userId' , userController.getUserById);
userRouter.get('/:searchParams',userController.searchUsers);
userRouter.post('/changePic', userController.changeUserPicture);
userRouter.post('/changePassword',userController.changePassword);

// router.post('/api/users/:id/changePassword', userController.changePassword);




module.exports = userRouter;
