import React, {useState} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
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
      <Nav.Link className="navbar-text-link" target="_blank" href="https://www.gofundme.com/f/provide-our-heroes-ppe-for-hospitals?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">Donate</Nav.Link>
      <Nav.Link className="navbar-text-link" href="/contact">Contact</Nav.Link>
      <NavDropdown className="navbar-text-link" title="More Info" id="nav-dropdown">
        <NavDropdown.Item className="navbar-dropdown-text" href="/about-us">About Us</NavDropdown.Item>
        <NavDropdown.Item className="navbar-dropdown-text" href="/current-metrics">Current Metrics</NavDropdown.Item>
        <NavDropdown.Item className="navbar-dropdown-text" href="/faq">FAQ</NavDropdown.Item>
        <NavDropdown.Item className="navbar-dropdown-text" href="/our-team">Our Team</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);}