import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true" id="home">
        <Row className="fullscreen center">
          <Col className="text-center white">
            <h1 className="name">Muhammad Sultoni</h1>
              <h3 className="job">Web Developer</h3>
          </Col>
        </Row>
      </Container>
     )
  }
}
