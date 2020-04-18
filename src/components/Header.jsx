import React, {useState} from "react";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import "../styles/HeaderCSS.css";

export default function Header(props) { 
    return (
<Navbar style={{paddingBottom: "0", paddingTop: "0"}} bg="white" expand="lg" sticky="top">
  <Navbar.Brand bsPrefix="navbar-text-main" href="/">Provide Our Heroes</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{padding: 20}}>
      <Nav.Link className="navbar-text-link" href="/request-ppe">Request PPE</Nav.Link>
      <Nav.Link className="navbar-text-link" href="/volunteer">Volunteer</Nav.Link>
      <Nav.Link className="navbar-text-link" href="/donate">Donate</Nav.Link>
      <Nav.Link className="navbar-text-link" href="/contact">Contact</Nav.Link>
      <NavDropdown active className="navbar-text-link" title="About Us" id="nav-dropdown">
        <NavDropdown.Item className="navbar-dropdown-text" href="/current-metrics">Current Metrics</NavDropdown.Item>
        <NavDropdown.Item className="navbar-dropdown-text" href="/faq">FAQ</NavDropdown.Item>
        <NavDropdown.Item className="navbar-dropdown-text" href="/our-team">Our Team</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);}