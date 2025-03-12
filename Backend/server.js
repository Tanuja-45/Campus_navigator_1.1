// Import required modules
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const expressAsyncHandler = require('express-async-handler');
require("dotenv").config();

// Initialize Express app
const app = express();

app.use(cors({
  origin:'http://localhost:5173'
}))


// Middleware to handle CORS
app.use(cors());  // Allows all origins (for testing purposes)

// Middleware to parse incoming requests
app.use(express.json());

// Connect to MongoDB
const mClient = new MongoClient(process.env.DB_URL);

mClient
  .connect()
  .then((connectionObj) => {
    const fsddb = connectionObj.db('samplecn');
    const usersCollection = fsddb.collection('user');

    // Set MongoDB collections as app variables
    app.set('usersCollection', usersCollection);
    console.log("DB connection success");

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`HTTP server started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Error in DB connection", err));

// JWT Token Verification Middleware
const tokenVerify = (req, res, next) => {
  const bearerToken = req.headers.authorization;

  if (!bearerToken) {
    return res.status(401).send({ message: "Unauthorized access" });
  }

  const token = bearerToken.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send({ message: "Token expired or invalid. Please relogin." });
  }
};

// User Routes
const userApp = express.Router();

// Register a new user (public route)
userApp.post("/user", async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const newUser = req.body;

  // Check if user already exists
  const existingUser = await usersCollection.findOne({ username: newUser.username });
  if (existingUser) {
    return res.status(400).send({ message: "User already exists" });
  }

  // Hash the password
  const hashedPassword = await bcryptjs.hash(newUser.password, 7);
  newUser.password = hashedPassword;

  // Insert user into the database
  await usersCollection.insertOne(newUser);
  res.send({ message: "User registered successfully" });
});

// User login (public route)
userApp.post("/login", async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const { username, password } = req.body;

  // Check if user exists
  const user = await usersCollection.findOne({ username });
  if (!user) {
    return res.status(400).send({ message: "Invalid username" });
  }

  // Compare passwords
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ message: "Invalid password" });
  }

  // Generate JWT token
  const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.send({ message: "Login successful", token, user });
});

// Get All Users
userApp.get("/users", tokenVerify, async (req, res) => {
  const usersCollection = req.app.get("usersCollection");

  // Fetch all users from the collection
  const users = await usersCollection.find().toArray();

  if (users.length === 0) {
    return res.status(404).send({ message: "No users found" });
  }

  res.send({ message: "All users", users });
});

// Get User by Username
userApp.get("/users/:username", tokenVerify, async (req, res) => {
  const usersCollection = req.app.get("usersCollection");
  const username = req.params.username;

  // Find user by username
  const user = await usersCollection.findOne({ username });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  res.send({ message: "User details", user });
});

// Update User
userApp.put(
    "/user",
    tokenVerify, // Uncomment this if you want to verify the JWT token
    expressAsyncHandler(async (req, res) => {
      // Get the usersCollection object
      const usersCollection = req.app.get("usersCollection");
      
      // Get the modified user data from the client
      let modifiedUser = req.body;
      console.log("Modified user:", modifiedUser);
      
      // Ensure the username is provided in the request
      if (!modifiedUser.username) {
        return res.status(400).send({ message: "Username is required" });
      }
  
      // If the password is provided, hash it before saving
      if (modifiedUser.password) {
        modifiedUser.password = await bcrypt.hash(modifiedUser.password, 10);
      }
  
      try {
        // Modify the user by username
        const result = await usersCollection.updateOne(
          { username: modifiedUser.username }, // Find the user by username
          { $set: { ...modifiedUser } } // Set the updated user data
        );
  
        if (result.matchedCount === 0) {
          return res.status(404).send({ message: "User not found" });
        }
  
        res.send({ message: "User modified successfully" });
      } catch (error) {
        console.error("Error occurred while modifying user:", error);
        res.status(500).send({ message: "Error occurred while modifying the user" });
      }
    })
  );
  
  
  
// Delete User
userApp.delete(
    "/user/:username",
    tokenVerify,
    expressAsyncHandler(async (req, res) => {
      const usersCollection = req.app.get("usersCollection");
      const username = req.params.username;  // Get username from URL
  
      // Check if the user exists
      const existingUser = await usersCollection.findOne({ username });
      if (!existingUser) {
        return res.status(404).send({ message: "User not found" });
      }
  
      // Proceed with deleting the user
      await usersCollection.deleteOne({ username });
      res.send({ message: "User deleted" });
    })
  );
  

// Export the user routes
app.use("/user-api", userApp);

// Handling invalid paths
app.use('*', (req, res) => {
  res.status(404).send({ message: "Invalid path" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: "Error occurred", errorMessage: err.message });
});
