import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleScrollToDepartments = (e) => {
    e.preventDefault();
    const section = document.getElementById("departments-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      section.classList.add("highlight");

      setTimeout(() => {
        section.classList.remove("highlight");
      }, 2000);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="header-container">
      <div className="left">
        <h1 className="header-title">Campus Navigator</h1>
      </div>

      <nav className="center">
        <ul className="navbar">
          <li className="nav-item">
            <Link to="/" className="fw-bold nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/departments" className="fw-bold nav-link">Faculty</Link>
          </li>
          <li className="nav-item">
            <Link to="/campus-map" className="fw-bold nav-link">Campus Map</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="fw-bold nav-link">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="fw-bold nav-link">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;