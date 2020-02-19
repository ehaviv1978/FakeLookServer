const express =  require('express');
const postController = require('../controllers/postController');
const userController = require('../controllers/userController');


const router = express.Router();

 router.get('/api/posts', postController.getAllPosts);
 router.post('/api/posts' , postController.addPost);
 router.get('/api/users' , userController.getAllUsers);
 router.get('/api/users/:searchParams' ,userController.getUser);


module.exports = router;