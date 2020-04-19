import React from 'react';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logoAset from '../img/aset-logo-bgalpha.png'
import './Menu.css';

export default class Menu extends React.PureComponent {
    render() {
        return (
            <Navbar className="aset-lightpurple-bg" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={logoAset}
                        height="30"
                        className="d-inline-block align-top"
                        alt="Aset logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/#especialidades">Especialidades</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/agenda">
                            <Button className="aset-action">Agenda</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

