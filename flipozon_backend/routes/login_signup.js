const express = require('express');
const { loginUser, signupUser } = require('../controllers/authController');

const router = express.Router();

// Route for user login
router.post('/login', loginUser);

// Route for user signup
router.post('/signup', signupUser);

module.exports = router;