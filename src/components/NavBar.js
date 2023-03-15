import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
// import './assets/components/styles/navbar.css'

function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateIsMobile() {
      setIsMobile(window.innerWidth <= 850);
    }
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <Navbar expand="md" id="mynavstyle">
      <Navbar.Brand as={Link} to="/">JobCat</Navbar.Brand>
      {isMobile ? (
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-button" />
      ) : (
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
      )}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/ResumeForm">Resume</Nav.Link>
          <Nav.Link as={Link} to="/JobSearch">Job Search</Nav.Link>
          <Nav.Link as={Link} to="/ApplicationHistory">Application History</Nav.Link>
          {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;