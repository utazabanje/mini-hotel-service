import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        
        <Navbar className="navigation-bar" expand="md">
            <Navbar.Brand href="/">MHS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/login">Staff Login</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/menage">Menage Guest</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;