import React, {useState} from "react";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "gatsby";
import "../styles/HeaderCSS.css";

export default function Header(props) { 
    return (
<Navbar style={{paddingBottom: "0", paddingTop: "0"}} bg="white" expand="lg" sticky="top">
  <Link to="/" style={{textDecoration: "none", color: "none"}}><Navbar.Brand bsPrefix="navbar-text-main">Provide Our Heroes</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" style={{padding: 20}}>
      <Link to="/request-ppe" className="nav-link navbar-text-link" activeClassName="navbar-text-active">Request PPE</Link>
      <Link to="/volunteer" className="nav-link navbar-text-link" activeClassName="navbar-text-active">Volunteer</Link>
      <Nav.Link className="navbar-text-link" target="_blank" href="https://www.gofundme.com/f/provide-our-heroes-ppe-for-hospitals?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">Donate</Nav.Link>
      <Link to="/contact" className="nav-link navbar-text-link" activeClassName="navbar-text-active">Contact</Link>
      <NavDropdown className="navbar-text-link" title="More Info" id="nav-dropdown">
        <Link to="/about-us" className="navbar-dropdown-text dropdown-item" activeClassName="navbar-text-active">About Us</Link>
        <Link to="/current-metrics" className="navbar-dropdown-text dropdown-item" activeClassName="navbar-text-active">Current Metrics</Link>
        <Link to="/faq" className="navbar-dropdown-text dropdown-item" activeClassName="navbar-text-active">FAQ</Link>
        <Link to="/our-team" className="navbar-dropdown-text dropdown-item" activeClassName="navbar-text-active">Our Team</Link>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);}