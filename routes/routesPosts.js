const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

/** 
* @swagger
* /api/posts/{userId}:
*  get:
*    description: get all user posts by user ID number
*    parameters:
*        - in: path
*          name: userId   # Note the name is the same as in the path
*          required: true
*          type: string
*          minimum: 1
*          description: The user ID.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/posts/:userId', postController.getAllPosts);

/** 
* @swagger
* /api/posts:
*  post:
*       summary: add new post.
*       description: add new user post by user ID number
*       consumes:
*        - application/json
*       parameters:
*        - in: body
*          name: user
*          description: The user to add post.
*          schema:
*            type: object
*            required:
*              - userId
*              - latGPS
*              - longGPS
*              - picture
*            properties:
*              userId:
*                type: number
*              latGPS:
*                type: number
*                format: double
*              longGPS:
*                type: number
*                format: double
*              picture:
*                type: string
*              description:
*                type: string
*       responses:
*        201:
*          description: Created
*/
router.post('/api/posts', postController.addPost);

/** 
* @swagger
* /api/posts/{postId}/{userId}:
*  post:
*    description: search user by first and last name
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
*       '201': 
*           description: post like add
*/
router.post('/api/posts/:postId/:userId', postController.addPostLike);
router.delete('/api/posts/:postId/:userId', postController.removePostLike);
router.get('/api/posts/:userId/:postId', postController.getPost);
router.get('/api/postsSearch/:searchParams', postController.searchPosts);
router.get('/api/posts/getMapPosts/:minLat/:maxLat/:minLong/:maxLong/:userId/:minDate/:maxDate/:range/:tag/:latGPS/:longGPS',
postController.getMapPosts);
router.post('/api/posts/addTag/:id', postController.addPostTag);
router.post('/api/posts/removeTag/:id', postController.deletePostTag);

//router.get('/api/posts/likes/:postId', postLikeController.getPostLikes);

module.exports = router;