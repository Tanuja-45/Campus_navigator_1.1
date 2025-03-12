import React from "react";
import "./footer.css";

import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <h2 className="logo">Campus Navigator</h2>
          <p className="description">
            Campus Navigatorhelps students, faculty, and visitors easily find their way and access resources across the campus  </p>
        </div>

        <div className="footer-section contact-section">
          <h3>CONTACT US</h3>
          <p>hello@campusnavigator.co</p>
          <p>24 ,NY 11201</p>
          <p>+91 123 456 7890</p>
        </div>

        <div className="footer-section social-section">
          <h3>FOLLOW US</h3>
          <p>Yes, we are social</p>
          <div className="social-icons">
            <a href="#" className="icon facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="icon twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="icon email">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Campus Navigator Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
