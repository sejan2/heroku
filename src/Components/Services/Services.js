import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setServices(data)
            })
    })
    return (
        <div>
            <Row xs={1} md={4}>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;