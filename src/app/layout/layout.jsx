import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
// import AppNavbar from 'shared/components/navbar/navbar';

export default class Layout extends Component {
  render() {
    return (
      <Container fluid="true" id="container">
        <Row>
          {/* <Col id="navbar" sm="12"><AppNavbar /></Col> */}
          <Col id="body" sm="12" className="no-padding">
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}
