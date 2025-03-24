// Footer.jsx
import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="src\components\Header\zenLogo.png" className='zenico' alt="logo" />
          
          <p>
            We are a company dedicated to providing innovative solutions and exceptional services.
            Our mission is to help our clients achieve their goals.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> &nbsp; 1-800-123-4567</span>
            <span><i className="fas fa-envelope"></i> &nbsp; info@zenq.com</span>
          </div>
          <div className="socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="footer-section contact-form">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form>
            <input type="email" name="email" className="text-input" placeholder="Your email address" />
            <button type="submit" className="btn btn-primary">SUBSCRIBE</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ZenQuest. All rights reserved.
      </div>
    </footer>
  );
};

export default footer;