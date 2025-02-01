import React, { useRef, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const sliderRef = useRef(null);
    const outputRef = useRef(null);
    const [sliderValue, setSliderValue] = useState(5000); // Начална стойност

    useEffect(() => {
        if (sliderRef.current && outputRef.current) {
            // Задаваме първоначалната стойност на output
            outputRef.current.innerHTML = sliderRef.current.value;
        }
    }, []);

    const handleSliderChange = (event) => {
        setSliderValue(event.target.value); // Обновяваме стойността в state
        outputRef.current.innerHTML = event.target.value;
    };

    return (
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>

                    <div className='scroll'>
                        <ul>
                            <li>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check type={type} id={`default-${type}-1`} label="Men" />
                                            <Form.Check type={type} id={`default-${type}-2`} label="Women" />
                                            <Form.Check type={type} id={`default-${type}-3`} label="Beauty" />
                                            <Form.Check type={type} id={`default-${type}-4`} label="Kids" />
                                            <Form.Check type={type} id={`default-${type}-4`} label="Kids" />
                                            <Form.Check type={type} id={`default-${type}-4`} label="Kids" />
                                            <Form.Check type={type} id={`default-${type}-4`} label="Kids" />
                                            <Form.Check type={type} id={`default-${type}-4`} label="Kids" />
                                        </div>
                                    ))}
                                </Form>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>FILTER BY PRICE</h6>
                    <div className="slidecontainer">
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            value={sliderValue}
                            className="slider"
                            id="myRange"
                            ref={sliderRef}
                            onChange={handleSliderChange}
                        />
                        <p>Price: $<span id="demo" ref={outputRef}></span></p>
                    </div>
                </div>

                <div className="filterBox">
                    <h6>PRODUCT CATEGORIES</h6>

                    <div className='scroll'>
                        <ul>
                            <li>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check type={type} id={`default-${type}-1`} label="In Stock" />
                                            <Form.Check type={type} id={`default-${type}-2`} label="On Sale" />
                                        </div>
                                    ))}
                                </Form>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="filterBox">
                    <h6>BRANDS</h6>

                    <div className='scroll'>
                        <ul>
                            <li>
                                <Form>
                                    {['checkbox'].map((type) => (
                                        <div key={`default-${type}`} className="mb-3">
                                            <Form.Check type={type} id={`default-${type}-1`} label="StarBucks" />
                                            <Form.Check type={type} id={`default-${type}-2`} label="Coca Cola" />
                                            <Form.Check type={type} id={`default-${type}-3`} label="Pepsi" />
                                            <Form.Check type={type} id={`default-${type}-4`} label="Fanta" />
                                            <Form.Check type={type} id={`default-${type}-5`} label="Nescafe" />
                                            <Form.Check type={type} id={`default-${type}-6`} label="Sprite" />
                                        </div>
                                    ))}
                                </Form>
                            </li>
                        </ul>
                    </div>
                </div>


                <Link to="#"><img src='https://s3.ap-southeast-1.amazonaws.com/images.partner.zalora.com/crm/ph/NEWSLETTERS/body/2023/11/23/N_3.gif' className='w-100'></img></Link>

            </div>
        </>
    );
};

export default Sidebar;
