import React, { useState, useEffect } from 'react';
import { Button, Modal, Table, Form } from 'react-bootstrap';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

const API_BASE_URL = 'https://localhost:7170/api/Vehicle';

function AdminPanel() {
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [newVehicleData, setNewVehicleData] = useState({
    brand: '',
    model: '',
    vehicleType: '',
    location: '',
    mileage: '',
    postedDate: new Date().toISOString(),
    currencyRate: '',
    manufacturedYear: '',
    fuelType: '',
    transmission: '',
    price: '',
  });
  const [selectedVehicle, setSelectedVehicle] = useState(null); 

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = () => {
    fetch(`${API_BASE_URL}/GetVehicles`)
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error('Error fetching vehicles:', error));
  };

  const handleAddVehicle = () => {
    const formattedData = {
      ...newVehicleData,
      mileage: parseInt(newVehicleData.mileage),
      currencyRate: parseInt(newVehicleData.currencyRate),
      manufacturedYear: parseInt(newVehicleData.manufacturedYear),
      price: parseFloat(newVehicleData.price),
      postedDate: newVehicleData.postedDate,
    };

    if (selectedVehicle) { 
      axios.put(`${API_BASE_URL}/UpdateVehicle/${selectedVehicle.id}`, formattedData)
        .then(response => {
          fetchVehicles();
          setShowAddVehicleModal(false);
          setSelectedVehicle(null);
          setNewVehicleData({
            brand: '',
            model: '',
            vehicleType: '',
            location: '',
            mileage: '',
            postedDate: new Date().toISOString(),
            currencyRate: '',
            manufacturedYear: '',
            fuelType: '',
            transmission: '',
            price: '',
          }); 
        })
        .catch(error => console.error('Error updating vehicle:', error));
    } else { 
      axios.post(`${API_BASE_URL}/AddNewVehicle`, formattedData)
        .then(response => {
          fetchVehicles();
          setShowAddVehicleModal(false);
          setNewVehicleData({
            brand: '',
            model: '',
            vehicleType: '',
            location: '',
            mileage: '',
            postedDate: new Date().toISOString(),
            currencyRate: '',
            manufacturedYear: '',
            fuelType: '',
            transmission: '',
            price: '',
          });
        })
        .catch(error => console.error('Error adding vehicle:', error));
    }
  };

  const handleDeleteVehicle = (id) => {
    fetch(`${API_BASE_URL}/DeleteVehicle/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete vehicle');
      }
      fetchVehicles();
    })
    .catch(error => console.error('Error deleting vehicle:', error));
  };

  const handleUpdateVehicle = (vehicle) => {
    setNewVehicleData(vehicle); 
    setSelectedVehicle(vehicle);
    setShowAddVehicleModal(true);
  };

  const handleCloseAddVehicleModal = () => {
    setShowAddVehicleModal(false);
    setNewVehicleData({
      brand: '',
      model: '',
      vehicleType: '',
      location: '',
      mileage: '',
      postedDate: new Date().toISOString(),
      currencyRate: '',
      manufacturedYear: '',
      fuelType: '',
      transmission: '',
      price: '',
    });
    setSelectedVehicle(null); 
  };

  return (
    <>
    <AdminNavbar />
    <div className="container mt-4">
        <h1 className="mb-4">Manage Vehicles</h1>
        <div className="d-flex flex-wrap justify-content-center mb-3">
          <Button variant="success" onClick={() => setShowAddVehicleModal(true)}>
            Add Vehicle
          </Button>
    </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Vehicle ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Vehicle Type</th>
            <th>Location</th>
            <th>Mileage</th>
            <th>Posted Date</th>
            <th>Currency Rate</th>
            <th>Manufactured Year</th>
            <th>Fuel Type</th>
            <th>Transmission</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.brand}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.vehicleType}</td>
              <td>{vehicle.location}</td>
              <td>{vehicle.mileage}</td>
              <td>{vehicle.postedDate}</td>
              <td>{vehicle.currencyRate}</td>
              <td>{vehicle.manufacturedYear}</td>
              <td>{vehicle.fuelType}</td>
              <td>{vehicle.transmission}</td>
              <td>{vehicle.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteVehicle(vehicle.id)}>
                  Delete
                </Button>
                <Button variant="primary" onClick={() => handleUpdateVehicle(vehicle)}>
                  Update
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showAddVehicleModal} onHide={handleCloseAddVehicleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedVehicle ? 'Update Vehicle' : 'Add Vehicle'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group controlId="brand">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter brand"
                value={newVehicleData.brand}
                onChange={(e) => setNewVehicleData({...newVehicleData, brand: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="model">
                <Form.Label>Model</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter model"
                value={newVehicleData.model}
                onChange={(e) => setNewVehicleData({...newVehicleData, model: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="vehicleType">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter vehicle type"
                value={newVehicleData.vehicleType}
                onChange={(e) => setNewVehicleData({...newVehicleData, vehicleType: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter location"
                value={newVehicleData.location}
                onChange={(e) => setNewVehicleData({...newVehicleData, location: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="mileage">
                <Form.Label>Mileage</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter mileage"
                value={newVehicleData.mileage}
                onChange={(e) => setNewVehicleData({...newVehicleData, mileage: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="postedDate">
                <Form.Label>Posted Date</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Posted Date"
                value={newVehicleData.postedDate}
                onChange={(e) => setNewVehicleData({...newVehicleData, postedDate: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="currencyRate">
                <Form.Label>Currency Rate</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter Currency Rate"
                value={newVehicleData.currencyRate}
                onChange={(e) => setNewVehicleData({...newVehicleData, currencyRate: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="manufacturedYear">
                <Form.Label>Manufactured Year</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter manufactured year"
                value={newVehicleData.manufacturedYear}
                onChange={(e) => setNewVehicleData({...newVehicleData, manufacturedYear: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="fuelType">
                <Form.Label>Fuel Type</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter fuel type"
                value={newVehicleData.fuelType}
                onChange={(e) => setNewVehicleData({...newVehicleData, fuelType: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="transmission">
                <Form.Label>Transmission</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter transmission"
                value={newVehicleData.transmission}
                onChange={(e) => setNewVehicleData({...newVehicleData, transmission: e.target.value})}
                />
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter price"
                value={newVehicleData.price}
                onChange={(e) => setNewVehicleData({...newVehicleData, price: e.target.value})}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddVehicleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddVehicle}>
            {selectedVehicle ? 'Update' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
}

export default AdminPanel;
