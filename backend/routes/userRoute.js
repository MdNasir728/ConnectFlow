const express = require('express');
const router = express.Router();
const { register, login, getProfile, logout } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');


router.post('/register', register);


router.post('/login', login);


router.get('/profile', authMiddleware, getProfile);


router.post('/logout', authMiddleware, logout);

module.exports = router;