import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function UserNavbar() {
  const navigate = useNavigate();

  const tabStyle = {
    color: 'black',
    textDecoration: 'none',
    transition: 'color 0.2s',
    margin: '0 10px',
    fontWeight: 'bold',
  };

  const handleTabHover = (e) => {
    e.target.style.color = 'blue';
  };

  const handleTabLeave = (e) => {
    e.target.style.color = 'black'; 
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInEmail');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Vehicle" style={{ width: '100px', height: '45px', marginLeft: '50px' }} />
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={tabStyle} onMouseEnter={handleTabHover} onMouseLeave={handleTabLeave}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Advertisements" className="nav-link" style={tabStyle} onMouseEnter={handleTabHover} onMouseLeave={handleTabLeave}>
                Advertisements
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link" style={tabStyle} onMouseEnter={handleTabHover} onMouseLeave={handleTabLeave}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link" style={tabStyle} onMouseEnter={handleTabHover} onMouseLeave={handleTabLeave}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={handleLogout}>Logout</button> {/* Adjust margin */}
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
