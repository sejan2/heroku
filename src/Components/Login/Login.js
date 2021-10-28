import React from 'react';
import { Col, Form, FormControl, InputGroup, NavLink, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
    const { signInWithGoogle, setUser, setError, getEmail, getPassword, signInWithEmail } = useFirebase();
    return (
        <div className="text-center my-4">
            <h2 className="text-primary">Please Login</h2>
            <p className=" mt-2">Login with Email & Password</p>
            <p className="text-danger text-center"></p>
            <div className="w-25 mx-auto">
                <Form onSubmit={signInWithEmail}>
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
                                    onClick={getEmail}
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

                                </InputGroup.Text>
                                <FormControl
                                    onClick={getPassword}
                                    type="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                />
                            </InputGroup>
                        </Col>
                    </Row>

                    <button type="submit" className="btn btn-primary mt-2 w-100">
                        Login
                    </button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink as={Link} to="/register" className="text-decoration-none">
                    Need an Account? Please Register!
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p> Login with</p>
            <div>
                <button
                    onClick={() => {
                        signInWithGoogle()
                            .then((result) => {
                                const user = result.user;
                                setUser(user);

                            })
                            .catch((err) => {
                                const errorMessage = err.message;
                                setError(errorMessage);
                            });
                    }}
                    className="btn btn-primary"
                >
                    Google sign in
                </button>
            </div>
        </div>
    );
};

export default Login;