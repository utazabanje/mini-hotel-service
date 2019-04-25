import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        
        <Navbar className="navigation-bar" expand="md">
            <Navbar.Brand href={ROUTES.WELCOME}>MHS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href={ROUTES.WELCOME}>Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href={ROUTES.STAFF}>For Staff</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;