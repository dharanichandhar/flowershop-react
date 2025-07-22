import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-overlay">
        <form className="contact-form">
          <h2 className="contact-title">  <span style={{color:"White"}}>Contact </span>Flower Shop</h2>

          <input type="text" placeholder="Your Name" className="contact-input" />
          <input type="email" placeholder="Your Email" className="contact-input" />
          <input type="text" placeholder="Subject" className="contact-input" />
          <textarea placeholder="Your Message" className="contact-textarea"></textarea>

          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
