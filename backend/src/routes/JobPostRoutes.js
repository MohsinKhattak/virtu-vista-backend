const express = require('express');
const router = express.Router();
 
const { createJobPost   } = require('../controllers/jobPostController');

 
router.post('/create', createJobPost);
 
module.exports = router;
