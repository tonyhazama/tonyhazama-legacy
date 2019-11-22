import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { bodyXPos } from 'shared/functions/element';
import logo from 'assets/images/transparent-logo-extra-small.png';

export default class AppNavbar extends Component {

  constructor(prop) {
    super(prop);
    // setInterval(function() {console.log(window.offsetTop)}, 500);
    this.state = {
      isCompact: false
    }
  }

  menu = [
    { path:'home', title: 'Home' },
    { path:'about', title: 'About' },
    { path:'portfolio', title: 'Portfolio' },
    { path:'contact', title: 'Contact' },
    { path:'resume', title: 'Resume' },
  ]
  
  componentDidMount() {
    // setTimeout(() => this.setState({isLoading: false}), 2000);
    window.addEventListener('scroll', () => this.checkNavbarPos());
  }

  render() {
    const { isCompact } = this.state
    return (
      <Navbar bg="transparent" variant="dark" expand="lg" fixed="top" id="navbar" className={isCompact ? 'compact' : ''}>
        <Container>
          <div className="basic-navbar-nav">
            <div className="nav"></div>
          </div>
          <Navbar.Brand href="#home"><img src={logo} alt="logo"/><span>Muhammad Sultoni</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              {this.menu.map(menuItem => (
                <Nav.Item key={menuItem.path}>
                  <AnchorLink offset='49px' className="nav-link" href={`#${menuItem.path}`}>{menuItem.title}</AnchorLink>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }

  checkNavbarPos() {
    const homeHeight = document.getElementById('home').clientHeight;
    let isCompact;
    if (bodyXPos() > (homeHeight / 2)) { isCompact = true;
    } else { isCompact = false; }
    console.log(bodyXPos())
    this.setState({isCompact: isCompact})
  }
}
