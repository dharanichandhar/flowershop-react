import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    console.log('Form submitted:', formData);
    localStorage.setItem('name', fullname);
    localStorage.setItem('password', password);
    navigate('/login');
  };

  return (
    <div className="auth-section">
      <div className="auth-box">
        <h2 className="contact-title">
          <span style={{ color: "black" }}>Signup for <br /></span>Flower Shop</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" className="auth-input" name="fullname" onChange={handleChange} />
          <input type="email" placeholder="Email" className="auth-input" name="email" onChange={handleChange} />
          <input type="password" placeholder="Password" className="auth-input" name="password" onChange={handleChange} />
          <input type="password" placeholder="Confirm Password" className="auth-input" name="confirmPassword" onChange={handleChange} />
          <button type="submit" className="auth-button">Create Account</button>
        </form>
        <p className="auth-toggle-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
