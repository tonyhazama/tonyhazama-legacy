import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class AppNavbar extends Component {
  menu = [
    { path:'home', title: 'Home' },
    { path:'about', title: 'About' },
    { path:'portofolio', title: 'Portofolio' },
    { path:'contact', title: 'Contact' },
    { path:'resume', title: 'Resume' },
  ]
  
  goTo(path) {
    console.log(path);
  }

  render() {
    return (
      <Navbar bg="transparent" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Tony Hazama</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {this.menu.map(menuItem => (
                <Nav.Item>
                  <AnchorLink className="nav-link" href={`#${menuItem.path}`}>{menuItem.title}</AnchorLink>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
