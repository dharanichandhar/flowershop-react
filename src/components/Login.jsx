import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const confirmPassword = localStorage.getItem('password');
    if (password !== confirmPassword) {
      alert('Password is incorrect');
      return;
    }

    console.log('Form submitted:', formData);
    navigate('/gallery');
  };

  return (
    <div className="auth-section">
      <div className="auth-box">
        <h2 className="contact-title">
          <span style={{ color: "black" }}>Login to <br /></span>Flower Shop</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          
          <input type="email" placeholder="Email" className="auth-input" name="email" onChange={handleChange} />
          <input type="password" placeholder="Password" className="auth-input" name="password" onChange={handleChange} />
          <button type="submit" className="auth-button">Login Account</button>
        </form>
        <p className="auth-toggle-text">
          Don't have an account? <Link to="/login">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
