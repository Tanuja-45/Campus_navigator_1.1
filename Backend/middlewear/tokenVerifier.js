const jwt = require("jsonwebtoken");
require('dotenv').config();

const tokenVerify = (req, res, next) => {
  // Get bearer token from headers
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.send({ message: "Unauthorized access" });
  }
  // Extract token from bearer token
  const token = bearerToken.split(" ")[1];
  // Verify the token
  try {
    jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    res.send({ message: "Token expired. Please relogin to continue." });
  }
};

module.exports = tokenVerify;
