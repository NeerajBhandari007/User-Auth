const express = require('express');
const userInfoController = require('../controller/userInfo');

const router = express.Router();
router
  .post('/', userInfoController.createInfo)
  
exports.router = router; 