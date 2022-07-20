import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './HeaderNav.css';
import { Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";

const HeaderNav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <NavbarBrand>
          <img src="../image/logo-2.png" alt=""/>
        </NavbarBrand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end" style={{ width: "100%"}}>
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/About-us">ABOUT US</Nav.Link>
            <NavDropdown title="COURSES">
              <NavDropdown.Item href="#">BUSINESS CLASS</NavDropdown.Item>
              <NavDropdown.Item href="#">CISCO</NavDropdown.Item>
              <NavDropdown.Item href="#">COMPTIA A+</NavDropdown.Item>
              <NavDropdown.Item href="#">C#</NavDropdown.Item>
              <NavDropdown.Item href="#">CYBER SECURITY</NavDropdown.Item>
              <NavDropdown.Item href="#">DIGITAL LITERACY</NavDropdown.Item>
              <NavDropdown.Item href="#">DIGITAL MARKETING</NavDropdown.Item>
              <NavDropdown.Item href="/Graphics-design">GRAPHICS DESIGN</NavDropdown.Item>
              <NavDropdown.Item href="#">JAVA DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item href="#">ORACLE DATABASE</NavDropdown.Item>
              <NavDropdown.Item href="#">REVIT & AUTOCAD</NavDropdown.Item>
              <NavDropdown.Item href="#">SOFTWARE DEVELOPMENT</NavDropdown.Item>
              <NavDropdown.Item href="#">WEB DEVELOPMENT</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SHORT COURSES">
              <NavDropdown.Item href="/excel-powerpoint">EXCEL & POWERPOINT</NavDropdown.Item>
              <NavDropdown.Item href="/IELTS">IELTS TRAINING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">OUR TEAM</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
