const express = require('express');
const router = express.Router();
//get the functions from controller 
const signInController = require('../controller/signInController.js');

//puts certain callback functions depending on the routes

router.get('/', signInController.logInEngineer);



module.exports = router;