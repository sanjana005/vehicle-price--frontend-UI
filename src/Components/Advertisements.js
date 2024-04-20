import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import UserNavbar from './UserNavbar';

const ViewVehicles = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fetchVehicleData = () => {
    fetch('your-backend-api-url')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVehicleList(data); // Assuming data is an array of vehicle objects
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  };  

  const handleShowModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  // Function to decode Base64 string to Blob
  const decodeBase64ToBlob = (base64String) => {
    const byteString = atob(base64String.split(',')[1]);
    const mimeString = base64String.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };

  // Function to display image
  const displayImage = (base64String) => {
    const blob = decodeBase64ToBlob(base64String);
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  };

  useEffect(() => {
    fetchVehicleData();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="d-flex flex-wrap justify-content-center">
        {vehicleList.map((vehicle) => (
          <Card key={vehicle.id} style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={displayImage(vehicle.image)} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title>{vehicle.brand}</Card.Title>
              <Card.Text>
                <strong>Model:</strong> {vehicle.model}<br />
                <strong>Year:</strong> {vehicle.year}<br />
                <strong>Price:</strong> LKR {vehicle.price}
              </Card.Text>
              <Button variant="primary" onClick={() => handleShowModal(vehicle)}>View Details</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal to display vehicle details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedVehicle && selectedVehicle.brand} Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedVehicle && (
            <>
              <p><strong>Model:</strong> {selectedVehicle.model}</p>
              <p><strong>Year:</strong> {selectedVehicle.year}</p>
              <p><strong>Price:</strong> LKR {selectedVehicle.price}</p>
              <p><strong>Color:</strong> {selectedVehicle.features.color}</p>
              <p><strong>Mileage:</strong> {selectedVehicle.features.mileage}km</p>
              <p><strong>Engine:</strong> {selectedVehicle.features.engine}</p>
              <p><strong>Transmission:</strong> {selectedVehicle.features.transmission}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ViewVehicles;
