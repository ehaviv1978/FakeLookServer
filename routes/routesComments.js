const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

/** 
* @swagger
* /api/comments/getPostComments/{postId}/{userId}:
*  get:
*    summary: get one post comments by user.
*    parameters:
*        - in: path
*          name: postId 
*          required: true
*          type: number
*          description: the post Id.
*        - in: path
*          name: userId 
*          required: true
*          type: number
*          description: the user Id.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/comments/getPostComments/:postId/:userId', commentController.getAllComments);

/** 
* @swagger
* /api/comments/addComment/{postId}:
*  post:
*    summary: add comment to post.
*    parameters:
*        - in: path
*          name: postId 
*          required: true
*          type: number
*          description: the post Id.
*        - in: body
*          name: comment
*          description: the post comment.
*          schema:
*            type: object
*            required:
*              - userId
*              - commentContent
*            properties:
*              userId:
*                type: number
*              commentContent:
*                type: string
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.post('/api/comments/addComment/:postId', commentController.addComment);

/** 
* @swagger
* /api/comments/addLike/{commentId}/{userId}:
*  get:
*    summary: add like to comment.
*    parameters:
*        - in: path
*          name: commentId 
*          required: true
*          type: number
*          description: the comment Id.
*        - in: path
*          name: userId 
*          required: true
*          type: number
*          description: the user Id.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/comments/addLike/:commentId/:userId', commentController.addCommentLike);

/** 
* @swagger
* /api/comments/removeLike/{commentId}/{userId}:
*  delete:
*    summary: remove like from comment.
*    parameters:
*        - in: path
*          name: commentId 
*          required: true
*          type: number
*          description: the comment Id.
*        - in: path
*          name: userId 
*          required: true
*          type: number
*          description: the user Id.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.delete('/api/comments/removeLike/:commentId/:userId', commentController.removeCommentLike);

/** 
* @swagger
* /api/comments/tag/add/{commentId}:
*  post:
*    summary: add comment tag.
*    description: add tage to comment by comment id
*    parameters:
*        - in: path
*          name: commentId
*          required: true
*          type: string
*          minimum: 1
*          description: the comment id.
*        - in: body
*          name: tag
*          description: the comment tag.
*          schema:
*            type: object
*            required:
*              - tagContent
*            properties:
*              tagContent:
*                type: string
*    responses:
*       '200': 
*           description: post tag add
*/
router.post('/api/comments/tag/add/:commentId', commentController.addCommentTag);

/** 
* @swagger
* /api/comments/tag/remove/{commentId}:
*  post:
*    summary: remove comment tag.
*    description: remove tage from comment by comment id
*    parameters:
*        - in: path
*          name: commentId
*          required: true
*          type: string
*          minimum: 1
*          description: the comment id.
*        - in: body
*          name: tag
*          description: the tag to remove.
*          schema:
*            type: object
*            required:
*              - tagContent
*            properties:
*              tagContent:
*                type: string
*    responses:
*       '200': 
*           description: post tag add
*/
router.post('/api/comments/tag/remove/:commentId', commentController.deleteCommentTag);

module.exports = router;