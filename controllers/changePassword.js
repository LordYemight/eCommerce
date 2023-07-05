const bcrypt = require('bcrypt');
const changePasswordSchema = require('../validation/changePassVal');
const User = require('../models/user');



const changePassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Validate request body
    const { error } = changePasswordSchema.validate({ email, newPassword });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // update the user's password in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Error changing password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = changePassword;