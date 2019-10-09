import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true" id="home" style={{padding: '0px'}}>
        <div className="container-fluid" style={{background: 'rgba(0,0,0,0.5)'}}>
          <div className="container">
            <Row className="fullpage center">
              <Col sm="2" style={{height: '100vh', display: 'flex', alignItems: 'end', padding: '60px 0px'}}>
                {/* <img src={emblem} alt="T"/> */}
                <div className="sidelink">
                  <div>Github</div>
                  <div>Behance</div>
                  {/* <span>Web Designer</span> */}
                </div>
              </Col>
              <Col sm="8" className="text-center white">
                <h1 className="name">Muhammad Sultoni</h1>
                <h3 className="job">Web Developer</h3>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </div>
      </Container>
     )
  }
}
