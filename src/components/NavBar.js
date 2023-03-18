import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import '../components/styles/navbar.css'

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
    <Navbar expand="md" className="navbar-expand-sm navbar-light" id="mynavstyle">
      <Navbar.Brand as={Link} to="/">
        <img src="images/jobcat-logo-2.png" width="100" height="30" className="d-inline-block align-top" alt="jobcat logo" />
        
      </Navbar.Brand>
      {isMobile ? (
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-button" />
      ) : (
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-none" />
      )}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" id="navbar">
          <Nav.Link as={Link} to="/ResumeForm" className="text-lg" id="nav-text">Resume</Nav.Link>
          <Nav.Link as={Link} to="/JobSearch" className="text-lg" id="nav-text">Job Search</Nav.Link>
          <Nav.Link as={Link} to="/JobApplicationHistory" className="text-lg" id="nav-text">Applications</Nav.Link>
          {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;