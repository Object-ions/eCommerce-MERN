import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @desc Auth user and get token
// @route POST '/api/users/login'
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc Register user
// @route POST '/api/users'
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.send('Register user');
});

// @desc Logout user and Clear cookie
// @route POST '/api/users/logout'
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send('Logout user');
});

// @desc Get user profile
// @route GET '/api/users/profile'
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send('Get user Profile');
});

// @desc Update user profile (this is for the user to update its own profile, so we will use the token vs the admin access)
// @route PUT '/api/users/profile'
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send('Update user Profile');
});

// @desc Get users
// @route GET '/api/users'
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send('Get users');
});

// @desc Get user by id
// @route GET '/api/users/:id'
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send('Get user by id');
});

// @desc Delete user
// @route DELETE '/api/users/:id'
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send('Delete user');
});

// @desc Update user
// @route PUT '/api/users/:id'
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send('Update user');
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
