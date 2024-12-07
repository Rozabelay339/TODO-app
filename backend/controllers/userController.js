const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, address, email, password } = req.body;

    if (!firstName || !lastName || !address || !email || !password) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newUser = new User({ firstName, lastName, address, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully.', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user.', error: error.message });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users.', error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id);
    if (!user) return res.status(404).json({ message: 'User not found.' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch user.', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  console.log('Update request received for ID:', req.params.user_id);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User not found.' });
    res.status(200).json({ message: 'User updated successfully.', user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(400).json({ message: 'Failed to update user.', error: error.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.user_id);
    if (!deletedUser) return res.status(404).json({ message: 'User not found.' });
    res.status(200).json({ message: 'User deleted successfully.', user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete user.', error: error.message });
  }
};
