import React from 'react';
import UserNavbar from './UserNavbar';

const About = () => {
  return (
    <div style={{ backgroundColor: '#333', minHeight: '100vh' }}>
      <UserNavbar />
      <div style={{ textAlign: 'center', margin:'100px' }}>
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
          <h1 style={{ color: 'darkblue', marginBottom: '20px' }}>Welcome to Wheels.Ai</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.5' }}>
            Welcome to Wheels.Ai, where innovation meets excellence in the realm of vehicle price prediction.
            At Wheels.Ai, we're dedicated to reshaping the automotive landscape through cutting-edge technology and unparalleled expertise.<br/><br/>
            Our mission is simple: to provide you with accurate and insightful predictions, empowering you to make informed decisions in the dynamic world of vehicle pricing. <br />
            Join us on this exciting journey as we revolutionize the way you navigate the automotive market.
            Welcome to the future of vehicle pricing. Welcome to Wheels.Ai.
          </p>
        </div>
      </div>
      <hr style={{ borderTop: '3px solid white', margin: '40px 0' }} />
    </div>
  );
};

export default About;
