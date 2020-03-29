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

router.delete('/:commentId/likes',commentController.removeCommentLike);
router.get('/:commentId/likes',commentController.addCommentLike);


// router.delete('/api/comments/:commentId/:userId',commentController.removeCommentLike);
// router.get('/api/comments/:commentId/:userId',commentController.addCommentLike);
// router.get('/api/posts/:postId/comments/:userId', commentController.getAllComments);

module.exports = postRouter;
