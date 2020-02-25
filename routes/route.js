const express =  require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');



const router = express.Router();

 router.get('/api/posts', postController.getAllPosts);
 router.post('/api/posts' , postController.addPost);
 router.get('/api/users' , userController.getAllUsers);
 router.post('/api/users/addUser' , userController.addUser);
 router.get('/api/users/:searchParams' ,userController.getUser);
 router.get('/api/users/logIn/:email' ,userController.getUserByEmail);
 router.post('/api/users/picture' , userController.changeUserPicture);
 router.get('/api/posts/:postId', commentController.getAllComments);
 router.post('/api/posts/:postId', commentController.addComment)


module.exports = router;