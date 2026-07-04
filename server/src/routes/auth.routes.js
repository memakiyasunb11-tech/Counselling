const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Mock route for registration
router.post('/register', authController.register);

// Mock route for login
router.post('/login', authController.login);

module.exports = router;
