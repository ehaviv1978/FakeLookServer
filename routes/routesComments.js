const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.get('/api/comments/getPostComments/:postId/:userId', commentController.getAllComments);
router.post('/api/comments/addComment/:postId', commentController.addComment);
router.get('/api/comments/:commentId/:userId', commentController.addCommentLike);
router.delete('/api/comments/:commentId/:userId', commentController.removeCommentLike);
router.post('/api/commentsTagAdd/:id', commentController.addCommentTag);
router.post('/api/commentsTagRemove/:id', commentController.deleteCommentTag);

module.exports = router;