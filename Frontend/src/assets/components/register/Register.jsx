import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("https://campus-navigator-nine.vercel.app/", { role, username, password })
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-fluid register-page">
      <div className="row register-container">
        
        {/* Left Side: Image */}
        <div className="col-md-6 register-right d-none d-md-block">
          <div className="graphic-container"></div>
        </div>

        {/* Right Side: Form */}
        <div className="col-md-6 register-left">
          <h1>Create Your Account</h1>
          <p>Sign up and explore the campus navigation system</p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="role">Role</label>
              <select
                id="role"
                className="form-control"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select role</option>
                <option value="student">Student</option>
                <option value="faculty">Faculty</option>
                <option value="parent">Parent</option>
              </select>
            </div>

            <div className="form">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="form">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-b btn-success">
              Create account
            </button>
          </form>

          <p className="login-link">
            Already have an account? <a href="/login">Log in here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;