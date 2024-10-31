import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="">Home</a>
          <a href="Volunteer">About</a>
          <a href="Articles">Resources</a>
          <a href="Contact">Contact</a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} SUKOON. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
