const express = require('express');
const router = express.Router();
//get the functions from controller 
const postController = require('../controller/postController');

//puts certain callback functions depending on the routes
router.get('/', postController.getAllPost);
router.get('/:id', postController.getSingleEngineersPost);
router.post('/', postController.addPost);


module.exports = router;