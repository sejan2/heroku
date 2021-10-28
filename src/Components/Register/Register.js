
import React from 'react';
import { NavLink, Button, Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Register = () => {
    const { signUpWithEmail, setUserName, sendVilifiedEmail, setError, getName, getEmail, getPassword } = useFirebase();
    return (
        <div>
            <div className="text-center my-4">
                <h2>Please Sign Up</h2>
                <p className=" mt-2">Sign Up with Email & Password</p>
                <p className="text-danger text-center"></p>
                <div className="w-25 mx-auto">
                    <Form
                        onSubmit={(e) => {

                            e.preventDefault();
                            signUpWithEmail()
                                .then((result) => {
                                    setUserName();
                                    sendVilifiedEmail();
                                    alert("User has been Created!");
                                    console.log(result)
                                })
                                .catch((err) => {
                                    const errorMessage = err.message;
                                    setError(errorMessage);
                                });
                        }}
                    >
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        {/* <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> */}
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getName}
                                        type="text"
                                        autoComplete="current-text"
                                        id="name"
                                        placeholder="Enter your name"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        {/* <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> */}
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getEmail}
                                        type="email"
                                        autoComplete="current-email"
                                        id="email"
                                        placeholder="Enter your email address"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="mt-2">
                            <Col className="text-start">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Text>
                                        {/* <FontAwesomeIcon icon={faLock}> </FontAwesomeIcon> */}
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getPassword}
                                        type="password"
                                        autoComplete="current-password"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                        <Button type="submit" className="w-100 mt-3">
                            Sign UP
                        </Button>
                    </Form>
                </div>
                <p className="mt-2">
                    <NavLink as={Link} to="/login" className="text-decoration-none" >
                        Already have an account? Please login!
                    </NavLink>
                </p>
            </div>
        </div >
    );
};

export default Register;