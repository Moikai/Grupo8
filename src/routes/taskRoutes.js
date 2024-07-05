const express = require('express');
const router = express.Router();

const taskController = require('../controllers/taskController');
router.get('/getAllTasks', taskController.getAllTasks);


module.exports = router;