// import React from 'react'
// import './navbar.css'

// export const navbar = () => {
//   return (
//     <>
    
//     <div className='navbar'>
//                 <img className='logo' src="src\components\Header\zenLogo.png" alt="ZenQ_logo" />
//         <nav>
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//                 <li><a href="#">Services</a></li>
//             </ul>
            
//         </nav>
//         <button className='login'>LOGIN</button>
//     </div>
    
//     </>
//   )
// }

// export default navbar

import React, { useState } from "react";
import "./navbar.css";

const API_KEY = "AIzaSyCN_CWws7ku_gVsFqZsl-islw-2JGfgvuk"; // Your API Key

export const Navbar = () => {
  const [location, setLocation] = useState("Get Location");

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`
          );
          const data = await response.json();

          if (data.results.length > 0) {
            const addressComponents = data.results[0].address_components;
            let city = "";
            let state = "";

            addressComponents.forEach((component) => {
              if (component.types.includes("locality")) {
                city = component.long_name;
              }
              if (component.types.includes("administrative_area_level_1")) {
                state = component.long_name;
              }
            });

            setLocation(`${city}, ${state}`);
          } else {
            setLocation("Location not found");
          }
        },
        (error) => {
          setLocation("Access Denied");
        }
      );
    } else {
      setLocation("Not Supported");
    }
  };

  return (
    <>
      <div className="navbar">
        <img className="logo" src="src/components/Header/zenLogo.png" alt="ZenQ_logo" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </nav>
        <button className="location-btn" onClick={getLocation}>{location}</button>
        <button className="login">LOGIN</button>
      </div>
    </>
  );
};

export default Navbar;

