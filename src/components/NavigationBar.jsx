import React from 'react'
import '../style/landingPages.css'

import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar expand="lg" variant='dark'>
    <Container>
      <Navbar.Brand href="#home">Nana Film's</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link href="#superhero">Superhero</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar
