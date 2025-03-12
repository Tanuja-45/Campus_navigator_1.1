const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");

// Create a new Router for user-related routes
const userApp = express.Router();

// Register a new user (public route)
userApp.post("/user", expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const newUser = req.body;

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ username: newUser.username });
  if (existingUser) {
    return res.status(400).send({ message: "User already exists" });
  }

  // Hash password and store user data
  const hashedPassword = await bcryptjs.hash(newUser.password, 7);
  newUser.password = hashedPassword;
  await usersCollection.insertOne(newUser);

  res.send({ message: "User created successfully" });
}));

// User login (public route)
userApp.post("/login", expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const { username, password } = req.body;

  const user = await usersCollection.findOne({ username });
  if (!user) {
    return res.status(400).send({ message: "Invalid username" });
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ message: "Invalid password" });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.send({ message: "Login successful", token });
}));

// Get user details (protected route)
userApp.get("/users/:username", tokenVerify, expressAsyncHandler(async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const username = req.params.username;

  const user = await usersCollection.findOne({ username });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.send({ message: "User details", user });
}));

module.exports = userApp;
