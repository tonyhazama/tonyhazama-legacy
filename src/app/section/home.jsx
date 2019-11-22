import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { bodyXPos } from 'shared/functions/element';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submerged: false
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', () => this.checkNavbarPos());
  }

  checkNavbarPos() {
    const homeHeight = document.getElementById('home').clientHeight;
    let submerged;
    if (bodyXPos() > (homeHeight * (3 / 5))) { submerged = true;
    } else { submerged = false; }
    console.log(bodyXPos())
    this.setState({submerged: submerged})
  }

  render() {
    return (
      <Container fluid="true" id="home" style={{padding: '0px'}}>
        <div className="container-fluid d-flex" style={{background: 'rgba(16, 38, 41, 0.5)'}}>
          <div className="title">
            <h1 className="name">Muhammad Sultoni</h1>
            <h3 className="job">Web Developer</h3>
            <div className="button">Download Resume</div>
          </div>
          <div className={(this.state.submerged && "hidden " ) + " actions"}>
            <AnchorLink className="action" href='#about'>
              <i className="fas fa-long-arrow-alt-down"></i>
            </AnchorLink>
          </div>
        </div>
      </Container>
     )
  }
}
