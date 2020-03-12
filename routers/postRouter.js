const postController = require('../controllers/postController');
const commentController = require('../controllers/commentController');
const postLikeController = require('../controllers/postLikesController');
const express =  require('express');
const postRouter = express.Router();
const authMiddleware = require('../middlewares/auth-user');

postRouter.use(authMiddleware);

postRouter.get('/' , postController.getAllPosts);
postRouter.post('/', postController.addPost);
postRouter.get('/:postId',postController.getPost);
postRouter.get('/:postId/comments' , commentController.getAllComments);
postRouter.post('/:postId/comments' , commentController.addComment);
postRouter.get('/:postId/likes' , postLikeController.getPostLikes);
postRouter.post('/:postId/likes',postLikeController.addPostLike);
postRouter.delete('/:postId/likes',postLikeController.removePostLike);

// mainRouter.get('/api/posts/:userId', postController.getAllPosts);
// mainRouter.post('/api/post',postController.getPost);
// mainRouter.post('/api/posts' , postController.addPost);
// mainRouter.get('/api/posts/:postId/comments', commentController.getAllComments);
// mainRouter.post('/api/posts/:postId/comments', commentController.addComment);
// mainRouter.get('/api/posts/:postId/likes',postLikeController.getPostLikes);
// mainRouter.post('/api/posts/:postId/:userId',postLikeController.addPostLike);
// mainRouter.delete('/api/posts/:postId/:userId',postLikeController.removePostLike);

module.exports = postRouter;
