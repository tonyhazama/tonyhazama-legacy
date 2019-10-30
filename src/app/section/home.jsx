import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true" id="home" style={{padding: '0px'}}>
        <div className="container-fluid" style={{background: 'rgba(16, 38, 41, 0.5)'}}>
          <div className="container">
            <Row className="fullpage center">
              <Col sm="2" style={{height: '100vh', display: 'flex', alignItems: 'end', padding: '60px 0px'}}>
                {/* <img src={emblem} alt="T"/> */}
              </Col>
              <Col sm="8" className="text-center white">
                <div className="title">
                  <h1 className="name">Muhammad Sultoni</h1>
                  <h3 className="job">Web Developer</h3>
                </div>
              </Col>
              <Col sm="2" style={{height: '100vh', display: 'flex', alignItems: 'flex-end', padding: '40px 0px'}}>
                <div className="sidelink">
                  <div>Github</div>
                  <div>Instagram</div>
                  {/* <div>Web </div> */}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
     )
  }
}
