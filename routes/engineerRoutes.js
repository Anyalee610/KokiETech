const express = require('express');
const router = express.Router();
//get the functions from controller 
const engineerController = require('../controller/engineerController.js');

//puts certain callback functions depending on the routes
router.get('/', engineerController.getEngineer);
router.get('/:id', engineerController.getSingleEngineer);
router.post('/', engineerController.addEngineer);

//checking pushsss
module.exports = router;