import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-overlay">
        <div className="about-content">
          <h2 className="about-title">About Our <span className="shop-text">Flower Shop</span></h2>
          <p className="about-text">
            Welcome to FlowerShop — your one-stop destination for blooming beauty!
            We specialize in fresh, handpicked flowers crafted into stunning bouquets
            for every occasion. From birthdays to weddings, and just-because days,
            our floral experts bring joy and color into your life.
          </p>
          <p className="about-text">
            With eco-friendly practices and same-day delivery, our mission is simple:
            to deliver happiness one flower at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
