const express = require('express');
const userController = require('../controller/user');
const passport=require("passport");
const router = express.Router();
// const isAuth= require("../index")
router
  .post('/', userController.createUser)
  .get('/',isAuth, userController.getAllUsers)
  
  

exports.router = router;  

function isAuth(req, res, done) {
  if (req.user) {
    // aagge chale jao agar user hai to
    done();
  } else {
    res.send(401);
  }
}