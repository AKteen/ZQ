import React, { useState, useEffect } from 'react';
import './location.css';

const location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError('Geolocation is not supported by your browser.');
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_OPENCAGE_API_KEY`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                const city = data.results[0].components.city || data.results[0].components.town || data.results[0].components.village;
                const state = data.results[0].components.state;
                setLocation({ city, state });
              } else {
                setError('Location not found.');
              }
            })
            .catch((err) => {
              setError('Error fetching location.');
            });
        },
        (error) => {
          setError('Unable to retrieve your location.');
        }
      );
    };

    getLocation();
  }, []);

  if (error) {
    return <div className="location-display error">{error}</div>;
  }

  if (!location) {
    return <div className="location-display loading">Loading location...</div>;
  }

  return (
    <div className="location-display">
      {location.city}, {location.state}
    </div>
  );
};

export default location;