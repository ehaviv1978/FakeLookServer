const express = require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');
const commentController = require('../controllers/commentController');
const postLikeController = require('../controllers/postLikesController');

const router = express.Router();

//routs:
/**
* @swagger
* /api/users:
*  get:
*    description: use to request all register users first and last name + userId
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/users', userController.getAllUsers);

/** 
* @swagger
* /api/users/{id}:
*  get:
*    description: get all user paramaters by user ID number
*    parameters:
*        - in: path
*          name: id   # Note the name is the same as in the path
*          required: true
*          type: string
*          minimum: 1
*          description: The user ID.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/users/:id', userController.getUserById);

/** 
* @swagger
* /api/users/addUser:
*  post:
*       description: add new user to data base
*       summary: Creates a new user.
*       consumes:
*        - application/json
*       parameters:
*        - in: body
*          name: user
*          description: The user to create.
*          schema:
*            type: object
*            required:
*              - firstName
*              - lastName
*              - password
*              - email
*            properties:
*              firstName:
*                type: string
*              lastName:
*                type: string
*              password:
*                type: string
*              birthDate:
*                type: string
*              address:
*                type: string
*              job:
*                type: string
*              picture:
*                type: string
*              email:
*                type: string
*       responses:
*        201:
*          description: Created
*/
router.post('/api/users/addUser', userController.addUser);

/** 
* @swagger
* /api/users/search/{searchParams}:
*  get:
*    description: search user by first and last name
*    parameters:
*        - in: path
*          name: searchParams   # Note the name is the same as in the path
*          required: true
*          type: string
*          minimum: 1
*          description: The search string.
*    responses:
*       '200': 
*           description: a sacsesful response
*/
router.get('/api/users/search/:searchParams', userController.searchUsers);

/** 
* @swagger
* /api/users/logIn:
*  post:
*       summary: User log in.
*       description: user log in by email and password
*       consumes:
*        - application/json
*       parameters:
*        - in: body
*          name: user
*          description: The user to log in.
*          schema:
*            type: object
*            required:
*              - email
*              - password
*            properties:
*              password:
*                type: string
*              email:
*                type: string
*                format: email
*       responses:
*        202:
*          description: user loged in
*/
router.post('/api/users/logIn', userController.userLogIn);

/** 
* @swagger
* /api/users/picture:
*  post:
*       summary: Update user picture.
*       description: update user picture by user Id
*       consumes:
*        - application/json
*       parameters:
*        - in: body
*          name: user
*          description: The user to update picutre.
*          schema:
*            type: object
*            required:
*              - userId
*              - file
*            properties:
*              userId:
*                type: number
*              file:
*                type: string
*       responses:
*        202:
*          description: user picture updated
*/
router.post('/api/users/picture', userController.changeUserPicture);

/** 
* @swagger
* /api/users/changePassword/{userId}:
*  post:
*    summary: Change user password.
*    description: chagnge user password by user ID number
*    parameters:
*        - in: path
*          name: userId   # Note the name is the same as in the path
*          required: true
*          type: string
*          minimum: 1
*          description: The user ID.
*        - in: body
*          name: user
*          description: The user to update password.
*          schema:
*            type: object
*            required:
*              - password
*            properties:
*              password:
*                type: string
*    responses:
*       '202': 
*           description: user password updated
*/
router.post('/api/users/changePassword/:userId', userController.changePassword);

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
router.post('/api/posts/:postId/:userId', postLikeController.addPostLike);
router.delete('/api/posts/:postId/:userId', postLikeController.removePostLike);
router.get('/api/posts/:userId/:postId', postController.getPost);
router.get('/api/postsSearch/:searchParams', postController.searchPosts);
router.get('/api/posts/getMapPosts/:minLat/:maxLat/:minLong/:maxLong/:userId/:minDate/:maxDate/:range/:tag/:latGPS/:longGPS',
postController.getMapPosts);
router.post('/api/posts/addTag/:id', postController.addPostTag);
router.post('/api/posts/removeTag/:id', postController.deletePostTag);

router.get('/api/comments/getPostComments/:postId/:userId', commentController.getAllComments);
router.post('/api/comments/addComment/:postId', commentController.addComment);
router.get('/api/comments/:commentId/:userId', commentController.addCommentLike);
router.delete('/api/comments/:commentId/:userId', commentController.removeCommentLike);
router.post('/api/commentsTagAdd/:id', commentController.addCommentTag);
router.post('/api/commentsTagRemove/:id', commentController.deleteCommentTag);

//router.get('/api/posts/likes/:postId', postLikeController.getPostLikes);

module.exports = router;