import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/zenLogo.png" alt="Website Logo" />
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} My Modern Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default footer;