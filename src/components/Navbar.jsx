import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate
import './Navbar.css';

const Navbar = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate(); // ✅ Define navigate

  useEffect(() => {
    const name = localStorage.getItem('name');
    if (name) {
      setUser(name); // ✅ Set name from localStorage
    } else {
      navigate("/login");
    }
  }, []); // ✅ Add dependency array to avoid infinite loop

  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    setUser(null); // ✅ Clear user from state
    navigate("/login"); // ✅ Optionally redirect to login after logout
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid custom-container">
          <a className="navbar-brand" href="/">
            <span className="flower-text">Flower</span><span className="shop-text"> Shop</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

              {!user ? (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
                </>
              ) : (
                <>
                  <li className="nav-item"><span className="nav-link">Welcome, {user}</span></li>
                  <li className="nav-item"><button className="btn btn-outline-success" onClick={logout}>Logout</button></li>
                </>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
