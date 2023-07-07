const signUpSchema = require("../validators/signUpVal");
const User = require("../models/user");
const bcrypt = require('bcrypt');


const signUP = async (req, res) => {
  try {
    const { name, email, password } = req.body;

      // Validate signup data
    const { error } = signUpSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // Checks if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in the database
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error creating account:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

  module.exports = signUP; 