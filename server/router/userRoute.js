const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authenticateToken=require('../middleware/auth');

// router.post('/register',authenticateToken,userController.registerUser);

router.post('/register',userController.registerUser);

router.post('/loginUser',userController.loginUser);

router.get('/protected',authenticateToken,userController.protected);
module.exports = router;
