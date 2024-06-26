import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function UserNavbar() {
  const navigate = useNavigate();

  const tabStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.2s',
    margin: '0 10px',
    fontWeight: 'bold',
  };

  const handleTabHover = (e) => {
    e.target.style.color = 'blue';
  };

  const handleTabLeave = (e) => {
    e.target.style.color = 'white'; 
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInEmail');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'black' }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Vehicle" style={{ width: '100px', height: '45px', marginLeft: '50px' }} />
        </Link>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/ManageVehicles" className="nav-link" style={tabStyle} onMouseEnter={handleTabHover} onMouseLeave={handleTabLeave}>
                Vehicle Details
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Prediction" className="nav-link" style={tabStyle} onMouseEnter={handleTabHover} onMouseLeave={handleTabLeave}>
                Prediction
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default UserNavbar;
