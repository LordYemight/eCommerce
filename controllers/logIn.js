const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginSchema  = require('../validation/logInVal'); // Assuming you have a login validation schema
const User = require('../models/user')

// Login route
const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate the user credentials using the login schema
    const { error } = loginSchema.validate({ email, password });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Code to find the user by email from your database
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored password hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If credentials are valid, generate a JWT token
    const token = jwt.sign({ email }, 'your-secret-key');

    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = logIn;