const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.signup = async (req, res) => {
  const { fullName, email, phone, company, password, role } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      fullName,
      email,
      phone,
      company,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
exports.signin = async (req, res) => {
    const { email, password, role } = req.body;
  
    try {
      let user = await User.findOne({ email });
  
      if (!user || user.role !== role) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }
  
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };
  
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  exports.getUserProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  };
  
  // Update user profile
  exports.updateUserProfile = async (req, res) => {
    const { fullName, email, phone, company, password } = req.body;
  
    const userFields = { fullName, email, phone, company };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      userFields.password = await bcrypt.hash(password, salt);
    }
  
    try {
      let user = await User.findById(req.user.id);
  
      if (user) {
        // Handle role-specific updates
        if (user.role === 'ATTENDEE') {
          // Perform attendee-specific updates if needed
        } else if (user.role === 'VENDOR') {
          // Perform vendor-specific updates if needed
        }
  
        user = await User.findByIdAndUpdate(
          req.user.id,
          { $set: userFields },
          { new: true }
        );
  
        return res.json(user);
      } else {
        return res.status(404).json({ msg: 'User not found' });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server error' });
    }
  };