import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const TopNav = () => {
    const { user, logOut } = useFirebase();
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                fixed="top"
                className="bg-white">

                <Navbar.Brand
                    as={Link} to="/"
                    className="ml-md-5 navs-brand "
                    style={{ color: "#3a1746" }}>
                    Doctor's <strong>Chember</strong>
                </Navbar.Brand>



                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navs">
                        <Nav.Link as={Link} to="/" className="mr-md-5" active>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="mr-md-5" active>About</Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/services"
                            className="mr-md-5 text-dark" active>
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/volunteer"
                            className="mr-md-5 text-dark" active>
                            volunteer
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/volume"
                            className="mr-md-5 text-dark" active>
                            V.List
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/addEvent"
                            className="mr-md-5 text-dark" active>
                            Event add
                        </Nav.Link>
                        {!user.displayName ? < Nav.Link
                            as={Link}
                            to="/login"
                            className="mr-md-5 text-dark" active>
                            Login
                        </Nav.Link>

                            :
                            <Nav.Link
                                as={Link}
                                to=""
                                className="mr-md-5 text-dark" onClick={logOut} active>
                                Logout


                                <small>({user.displayName})</small>
                            </Nav.Link>

                        }

                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div>
    );
};

export default TopNav;