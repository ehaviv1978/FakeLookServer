const express =  require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');


const router = express.Router();

 router.get('/api/posts', postController.getAllPosts);
 router.post('/api/posts' , postController.addPost);
 router.get('/api/users' , userController.getAllUsers);
 router.post('/api/users/addUser' , userController.addUser);
 router.get('/api/users/:searchParams' ,userController.getUser);
 router.post('/api/users/picture' , userController.changeUserPicture);


module.exports = router;