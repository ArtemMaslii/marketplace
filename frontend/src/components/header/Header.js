import React, {useState} from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';


import './header.scss';
import duckLogo from '../../resources/img/header-logo.png';
import profilePicture from '../../resources/img/test-profile-pic.png';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
       <>
        <Navbar expand="lg" className="header-gradient">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src={duckLogo} alt="Duck Logo" width="60" height="60" className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="mobile-secondary-nav">
                    <Nav.Link href="#overview">Overview</Nav.Link>
                    <Nav.Link href="#inventory">Inventory</Nav.Link>
                    <Nav.Link href="#customers">Customers</Nav.Link>
                    <Nav.Link href="#products">Products</Nav.Link>
                </Nav>
                    <Form className="d-flex flex-grow-1 mx-5">
                        <FormControl
                            type="search"
                            placeholder="Search..."
                            className="me-2 search-bar"
                            aria-label="Search"
                        />
                        <Button variant="warning" className="search-button">Search</Button>
                    </Form>
                    {isLoggedIn ? (
                       <>
                        <div>
                            <a
                                className="btn me-3 cart-button"
                            />
                        </div>
                        <Dropdown align="end" className="ms-2">
                            <Dropdown.Toggle variant="" className="profile-picture" id="dropdown-profile">
                                <img src={profilePicture} alt="Profile" width="40" height="40" className="rounded-circle"/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="#sign-out">Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                       </>
                    ) : (
                        <div>
                            <Button variant="light login-button me-2">Log in</Button>
                            <Button variant="dark signup-button">Sign Up</Button>
                        </div>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </>
    );
}

export default Header;
