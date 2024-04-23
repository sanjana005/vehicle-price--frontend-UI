import React from 'react';
import UserNavbar from './UserNavbar';
import backgroundImage from '../assets/images/BG.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <UserNavbar />
      <div className="container" style={{ paddingTop: '100px', padding: '100px' }}>
        <div className="content" style={{ margin: '10px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px' }}>
          <h1 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px' }}>Welcome to <span style={{ color: 'darkred' }}>Wheels.Ai</span></h1>
          <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '16px', lineHeight: '1.5' }}>
          Unlock the power of foresight with Wheels.Ai - your gateway to informed decisions in the world of automobiles. From predicting the perfect price for your dream ride to unraveling the mysteries of market trends, we're here to empower you. Take the driver's seat in your purchasing journey and navigate confidently with Wheels.Ai by your side.
          </p>
            <button
            className="btn btn-primary"
            style={{
                backgroundColor: 'lightgreen',
                color: 'darkblue',
                fontWeight: 'bold',
                transition: 'background-color 0.3s',
                fontSize: '19px',
            }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = 'limegreen'; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = 'lightgreen'; }}
            >
            <Link to="/Prediction" style={{ textDecoration: 'none', color: 'inherit' }}>Predict Price</Link>
            </button>

        </div>
      </div>
    </div>
  );
}

export default Home;
