const express = require('express');
const router = express.Router();
//get the functions from controller 
const postController = require('../controller/postController');

//puts certain callback functions depending on the routes
router.get('/', postController.getAllPost);
router.get('/id:id', postController.getSingleEngineersPost);
router.get('/:username/', postController.getEngineersPost);
router.post('/', postController.addPost);



module.exports = router;