const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

/** 
* @swagger
* /api/posts/{userId}:
*  get:
*    summary: get all post for a loged user.
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
*    summary: add user post like.
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

/** 
* @swagger
* /api/posts/{postId}/{userId}:
*  delete:
*    summary: remove user post like.
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
router.delete('/api/posts/:postId/:userId', postController.removePostLike);

/** 
* @swagger
* /api/posts/{userId}/{postId}:
*  get:
*    summary: get one post by user.
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
router.get('/api/posts/:userId/:postId', postController.getPost);

/** 
* @swagger
* /api/posts/search/posts/{searchParams}:
*  get:
*    summary: Search posts by tags.
*    description: search posts by post tags and post comment tags
*    parameters:
*        - in: path
*          name: searchParams
*          required: true
*          type: string
*          minimum: 1
*          description: The search string.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/posts/search/posts/:searchParams', postController.searchPosts);

router.get('/api/posts/getMapPosts/:minLat/:maxLat/:minLong/:maxLong/:userId/:minDate/:maxDate/:range/:tag/:latGPS/:longGPS',
postController.getMapPosts);

/** 
* @swagger
* /api/posts/tag/add/{id}:
*  post:
*    summary: add post tag.
*    description: add tage to post by post id
*    parameters:
*        - in: path
*          name: id
*          required: true
*          type: string
*          minimum: 1
*          description: The search string.
*        - in: body
*          name: tag
*          description: the post tag.
*          schema:
*            type: object
*            required:
*              - tagContent
*            properties:
*              tagContent:
*                type: string
*    responses:
*       '201': 
*           description: post tag add
*/
router.post('/api/posts/tag/add/:id', postController.addPostTag);

/** 
* @swagger
* /api/posts/tag/remove/{id}:
*  post:
*    summary: remove post tag.
*    description: remove tage to post by post id
*    parameters:
*        - in: path
*          name: id
*          required: true
*          type: string
*          minimum: 1
*          description: The search string.
*        - in: body
*          name: tag
*          description: the post tag.
*          schema:
*            type: object
*            required:
*              - tagContent
*            properties:
*              tagContent:
*                type: string
*    responses:
*       '201': 
*           description: post tag add
*/
router.post('/api/posts/tag/remove/:id', postController.deletePostTag);

//router.get('/api/posts/likes/:postId', postLikeController.getPostLikes);

module.exports = router;