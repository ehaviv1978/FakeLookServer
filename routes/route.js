const express =  require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const postLikeController = require('../controllers/postLikesController');



const router = express.Router();

router.get('/api/users' , userController.getAllUsers);
router.post('/api/users/addUser' , userController.addUser);
router.get('/api/users/:searchParams' ,userController.getUser);
router.post('/api/users/logIn' ,userController.userLogIn);
router.post('/api/users/picture' , userController.changeUserPicture);
 router.get('/api/posts/:userId', postController.getAllPosts);
 router.post('/api/posts' , postController.addPost);
 router.get('/api/posts/:postId/comments', commentController.getAllComments);
 router.post('/api/posts/:postId/comments', commentController.addComment);
 router.get('/api/posts/:postId/likes',postLikeController.getPostLikes);
 router.post('/api/posts/:postId/:userId',postLikeController.addPostLike);
 router.delete('/api/posts/:postId/:userId',postLikeController.removePostLike);
 router.post('/api/post',postController.getPost);


module.exports = router;