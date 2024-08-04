const express = require('express');
const router = express.Router();
const { signup,signin ,getUserProfile, updateUserProfile  } = require('../controllers/authController');

// @route    POST api/auth/signup
// @desc     Register user
// @access   Public
router.post('/signup', signup);
// @route    POST api/auth/signin
// @desc     Authenticate user & get token
// @access   Public
router.post('/signin', signin);
// @route    GET api/user/profile
// @desc     Get user profile
// @access   Private
router.get('/profile', getUserProfile);

// @route    PUT api/user/profile
// @desc     Update user profile
// @access   Private
router.put('/Profile', updateUserProfile);

module.exports = router;
