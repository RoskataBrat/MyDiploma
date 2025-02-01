import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';

const countryList = [
  { name: 'Australia', code: 'AU' },
  { name: 'Austria', code: 'AT' },
  { name: 'Bulgaria', code: 'BG' },
  { name: 'Canada', code: 'CA' },
  { name: 'Denmark', code: 'DK' },
  { name: 'Espania', code: 'ES' },
  { name: 'France', code: 'FR' },
  { name: 'Germany', code: 'DE' },
  { name: 'Italy', code: 'IT' },
  { name: 'Japan', code: 'JP' },
  { name: 'USA', code: 'US' },
  { name: 'Russia', code: 'RU' },
  { name: 'Mexico', code: 'MX' }
];

function Example() {
    const [show, setShow] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const selectCountry = (country) => {
        setSelectedCountry(country);
        setShow(false);
        console.log(`Selected country: ${country.name}`);
    };

    const filteredCountries = countryList.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {selectedCountry ? `Selected: ${selectedCountry.name}` : 'Your Location'}
            </Button>

            <Modal show={show} onHide={handleClose} className='locationModal'>
                <Modal.Header>
                    <Modal.Title className='headerSearch w-100 mb-0'>Choose your Delivery Location</Modal.Title>
                    <Button className='close_' onClick={handleClose}><IoMdClose /></Button>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter your address and we will specify the offer to your area.</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search your area..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                    <ul className='countryList mt-3'>
                        {filteredCountries.map((country) => (
                            <li key={country.code} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                                <img 
                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`} 
                                    alt={`${country.name} flag`} 
                                    style={{ marginRight: '10px', width: '40px', height: '30px' }} 
                                />
                                <Button 
                                    variant="link" 
                                    onClick={() => selectCountry(country)}
                                    style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }}
                                >
                                    {country.name}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;



