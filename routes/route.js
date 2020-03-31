const express =  require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const postLikeController = require('../controllers/postLikesController');



const router = express.Router();

router.get('/api/users' , userController.getAllUsers);
router.get('/api/user/:id', userController.getUserById);
router.post('/api/users/addUser' , userController.addUser);
router.get('/api/users/:searchParams' ,userController.searchUsers);
router.get('/api/posts/:searchParams' ,postController.searchPosts);
router.post('/api/users/logIn' ,userController.userLogIn);
router.post('/api/users/picture' , userController.changeUserPicture);
 router.get('/api/userPosts/:userId', postController.getAllPosts);
 router.post('/api/posts' , postController.addPost);
 router.get('/api/posts/:postId/comments/:userId', commentController.getAllComments);
 router.post('/api/posts/:postId/comments', commentController.addComment);
 router.get('/api/posts/:postId/likes',postLikeController.getPostLikes);
 router.post('/api/posts/:postId/:userId',postLikeController.addPostLike);
 router.delete('/api/posts/:postId/:userId',postLikeController.removePostLike);
 router.delete('/api/comments/:commentId/:userId',commentController.removeCommentLike);
 router.get('/api/comments/:commentId/:userId',commentController.addCommentLike);
 router.post('/api/post',postController.getPost);
 router.post('/api/users/:id/changePassword', userController.changePassword);

 router.post('/api/postTagAdd/:id',postController.addPostTag);
 router.post('/api/postTagRemove/:id',postController.deletePostTag);
 
 router.post('/api/commentTagAdd/:id',commentController.addCommentTag);
 router.post('/api/commentTagRemove/:id',commentController.deleteCommentTag);



module.exports = router;