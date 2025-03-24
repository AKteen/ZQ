
import React from 'react';
import './services.css';

const services = () => {
    return (
        <>
            <center>
                <h1 className='hservice'>Services</h1>
            </center>
            <section className="title-cards-section">
                <div className="title-card">
                    <h2>Games Hub</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="card-button">Learn More</button>
                </div>
                <div className="title-card">
                    <h2>Wellness Hub</h2>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button className="card-button">View Details</button>
                </div>
                <div className="title-card">
                    <h2>Social Hub</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="card-button">Explore Now</button>
                </div>
            </section>
        </>
    );
};

export default services;