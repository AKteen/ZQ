import React from 'react';
import './about.css';

import { useNavigate } from "react-router-dom";


const about = () => {



  return (
    <>
    
    <center>
    <h1 className='habout'>About ZenQuest</h1>
    </center>
    <section className="about">
        <div className="hero-content">
        <h1>Welcome to Our Amazing Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Another paragraph with more details. You can add as much text as you need. This section is designed to be longer, so it can hold more information.
          This will make the hero section take up more vertical space on the page.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src="\about.png" alt="Hero Image" />
      </div>
      
    </section>
    </>
  );
};

export default about;