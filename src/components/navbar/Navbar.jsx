import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"
import { Link } from "react-router-dom";


function Navbarjsx() {
    return (
        <Navbar className="fixed-top" bg="dark" expand="lg">
            <Navbar.Brand className="text-warning font-weight-bold">Neal Gerber</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link text-info font-weight-bold" to="/">Home</Link>
                    <Link className="nav-link text-info font-weight-bold" to="/about">About</Link>
                    <Link className="nav-link text-info font-weight-bold" to="/portfolio">Portfolio</Link>
                    <Link className="nav-link text-info font-weight-bold" to="/contact">Contact Me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbarjsx;