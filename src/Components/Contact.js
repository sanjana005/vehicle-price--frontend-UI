import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';
import UserNavbar from './UserNavbar';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#333', minHeight: '100vh' }}>
      <UserNavbar />
      <h2 style={{ marginTop: '40px', color: '#fff', textAlign: 'center' }}>Contact us for more details</h2>
      <div style={{ margin: '20px auto', backgroundColor: '#fff', borderRadius: '10px', padding: '20px', textAlign: 'left', maxWidth: '400px' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', backgroundColor: 'black', color: '#fff', textAlign: 'center', padding: '10px', borderRadius: '5px' }}>Contact Details</h3>
        <div style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <FaEnvelope color="#007bff" size={40} style={{ marginRight: '20px' }} />
            <div>
              <p style={{ margin: '0' }}>Email</p>
              <p style={{ margin: '0' }}>wheelsai@example.com</p>
            </div>
          </div>
          <hr style={{ margin: '20px 0' }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiFillTwitterCircle color="#1da1f2" size={40} style={{ marginRight: '20px' }} />
            <div>
              <p style={{ margin: '0' }}>Twitter</p>
              <p style={{ margin: '0' }}>@wheelsai</p>
            </div>
          </div>
          <hr style={{ margin: '20px 0' }} />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <AiFillFacebook color="#3b5998" size={40} style={{ marginRight: '20px' }} />
            <div>
              <p style={{ margin: '0' }}>Facebook</p>
              <p style={{ margin: '0' }}>/wheelsai</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '20px', textAlign: 'left', maxWidth: '400px', margin: '20px auto' }}>
        <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', backgroundColor: 'black', color: '#fff', textAlign: 'center', padding: '10px', borderRadius: '5px' }}>Connect with Us</h3>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <FaEnvelope color="#007bff" size={40} />
          <AiFillTwitterCircle color="#1da1f2" size={40} />
          <AiFillFacebook color="#3b5998" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
