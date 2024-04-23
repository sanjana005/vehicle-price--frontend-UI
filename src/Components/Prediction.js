import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const PredictionPage = () => {
    const [formData, setFormData] = useState({
        mileage: '',
        currency_rate: '',
        manufactured_year: '',
        model: 'Aqua',
        location: 'Colombo', 
        vehicle_type: 'Car', 
        fuel_type: 'Petrol',
        transmission: 'Automatic'
    });
    const [predictionResult, setPredictionResult] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        let vehicleType = formData.vehicle_type;

        if (name === 'model' && value === 'Land Cruiser Prado') {
            vehicleType = 'Jeep';
        } else if (name === 'model' && formData.model === 'Land Cruiser Prado') {
            
            vehicleType = 'Car';
        }

        setFormData({
            ...formData,
            [name]: value,
            vehicle_type: vehicleType
        });
    };

    const handlePrediction = async () => {
        if (!formData.mileage || !formData.currency_rate || !formData.manufactured_year) {
            setError('Please fill in all the fields.');
            setPredictionResult(null);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/prediction', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            setPredictionResult(data.prediction);
            setError(null);
        } catch (error) {
            setError('Error predicting: ' + error.message);
            setPredictionResult(null);
        }
    };

    return (
        <div>
        <Container>
        <h1 className="mt-5 text-center" style={{ fontWeight: 'bold', color: 'navy' }}>Vehicle Price Prediction</h1>
            <div className="prediction-form mt-4" style={{ border: '3px solid #dee2e6', padding: '1.5rem' }}>
            <Form>
    <Row>
        <Col md={6}>
            <Form.Group controlId="mileage">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Mileage (km)</Form.Label>
                <Form.Control type="number" name="mileage" value={formData.mileage} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }} required />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="currency_rate">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Currency Rate</Form.Label>
                <Form.Control type="number" name="currency_rate" value={formData.currency_rate} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }} required />
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <Form.Group controlId="manufactured_year">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Manufactured Year</Form.Label>
                <Form.Control type="number" name="manufactured_year" value={formData.manufactured_year} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }} required />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="model">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Model</Form.Label>
                <Form.Control as="select" name="model" value={formData.model} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }}>
                    <option>Aqua</option>
                    <option>Axio</option>
                    <option>Land Cruiser Prado</option>
                    <option>Prius</option>
                    <option>Vitz</option>
                </Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <Form.Group controlId="location">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Location</Form.Label>
                <Form.Control as="select" name="location" value={formData.location} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }}>
                    <option>Colombo</option>
                    <option>Gampaha</option>
                    <option>Negombo</option>
                    <option>Kandy</option>
                    <option>Galle</option>
                </Form.Control>
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="vehicle_type">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Vehicle Type</Form.Label>
                <Form.Control as="select" name="vehicle_type" value={formData.vehicle_type} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }}>
                    <option>Car</option>
                    <option>Jeep</option>
                </Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col md={6}>
            <Form.Group controlId="fuel_type">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Fuel Type</Form.Label>
                <Form.Control as="select" name="fuel_type" value={formData.fuel_type} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }}>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>Hybrid</option>
                </Form.Control>
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group controlId="transmission">
                <Form.Label style={{ fontWeight: 'bold', color: 'navy' }}>Transmission</Form.Label>
                <Form.Control as="select" name="transmission" value={formData.transmission} onChange={handleInputChange} style={{ border: '2px solid #ced4da' }}>
                    <option>Automatic</option>
                    <option>Manual</option>
                    <option>Tiptronic</option>
                </Form.Control>
            </Form.Group>
        </Col>
    </Row>
    <Row>
        <Col className="text-center mt-3">
            <Button variant="primary" onClick={handlePrediction}>Predict</Button>
        </Col>
    </Row>
</Form>
            </div>
            {predictionResult !== null && (
                <div className="mt-4 text-center">
                    <h2>Prediction Result</h2>
                    <p className="lead">{`Predicted Price: LKR ${predictionResult}`}</p>
                </div>
            )}
            {error && (
                <div className="mt-4 text-center text-danger">
                    <p>{error}</p>
                </div>
            )}
        </Container>
        </div>
    );
};

export default PredictionPage;
