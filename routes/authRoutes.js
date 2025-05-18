const express = require('express');
const router = express.Router();
const { register, login, logout, localLogin } = require("../controllers/authController");

// Register route
router.post('/register', register);

// Login routes
router.get('/login', login);
router.get('/login/error', (req, res) => {
  res.json({ message: "Login error" });
});
router.get('/login/local', localLogin);

// Logout route
router.get('/logout', logout);

// Unauthenticated route
router.get('/unauthenticated', (req, res) => {
  console.log("Returning to the homepage...");
  res.redirect('/');
});

module.exports = router;
