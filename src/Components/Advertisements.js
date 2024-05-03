import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import UserNavbar from './UserNavbar';

const ViewVehicles = () => {
  const [vehicleList, setVehicleList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fetchVehicleData = () => {
    fetch('https://localhost:7170/api/Vehicle/GetAdvertisement') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVehicleList(data); 
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  };  

  const handleShowModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setShowModal(true);
  };

  useEffect(() => {
    fetchVehicleData();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="container mt-4">
        <h1 className="mb-4">Advertisements</h1>
        <div className="row">
          {vehicleList.map((vehicle) => (
            <div key={vehicle.id} className="col-lg-4 col-md-6 mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{vehicle.brand}</Card.Title>
                  <Card.Text>
                    <strong>Model:</strong> {vehicle.model}<br />
                    <strong>Vehicle Type:</strong> {vehicle.vehicleType}<br />
                    <strong>Location:</strong> {vehicle.location}<br />
                    <strong>Mileage:</strong> {vehicle.mileage}<br />
                    <strong>Posted Date:</strong> {vehicle.postedDate}<br />
                    {/* <strong>Currency Rate:</strong> {vehicle.currencyRate}<br />
                    <strong>Manufactured Year:</strong> {vehicle.manufacturedYear}<br />
                    <strong>Fuel Type:</strong> {vehicle.fuelType}<br />
                    <strong>Transmission:</strong> {vehicle.transmission}<br />
                    <strong>Price:</strong> {vehicle.price} */}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleShowModal(vehicle)}>View Details</Button>
                </Card.Body>
              </Card>
            </div>
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
                <p><strong>Vehicle Type:</strong> {selectedVehicle.vehicleType}</p>
                <p><strong>Location:</strong> {selectedVehicle.location}</p>
                <p><strong>Mileage:</strong> {selectedVehicle.mileage}</p>
                <p><strong>Posted Date:</strong> {selectedVehicle.postedDate}</p>
                {/* <p><strong>Currency Rate:</strong> {selectedVehicle.currencyRate}</p> */}
                <p><strong>Manufactured Year:</strong> {selectedVehicle.manufacturedYear}</p>
                <p><strong>Fuel Type:</strong> {selectedVehicle.fuelType}</p>
                <p><strong>Transmission:</strong> {selectedVehicle.transmission}</p>
                <p><strong>Price:</strong> {selectedVehicle.price}</p>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ViewVehicles;
