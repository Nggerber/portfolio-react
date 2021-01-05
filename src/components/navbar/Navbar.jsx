import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"
import { Link } from "react-router-dom";


function Navbarjsx() {
    return (
        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Neal Gerber</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/portfolio">Portfolio</Link>
                    <Link className="nav-link" to="/contact">Contact Me</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbarjsx;