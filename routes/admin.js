const express = require('express');
const router = express.Router();
const adminUserController = require('../controllers/adminUserController')

// 登录
router.post('/login', adminUserController.login);
// 注册
router.post('/register', adminUserController.register);

module.exports = router;