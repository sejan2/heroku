import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './services.css'

const Service = (props) => {
    const { banner, title } = props.service;
    // console.log(props.service)

    return (
        <Link to='/volunteer'>
            <Col>
                <Card>
                    <Card.Img variant="top" src={banner} height="300" />
                    <Card.Body className="" style={{
                        background: "linear-gradient( #19D3AE, #0fcfec)"
                    }}>
                        <Card.Title className="hellos">{title}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    );
};

export default Service;