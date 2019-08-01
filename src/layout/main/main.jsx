import React, { Component } from 'react'
import Sidebar from 'shared/components/sidebar/sidebar';
import { Row, Col, Container } from 'react-bootstrap';
import Navbar from 'shared/components/navbar/navbar';

export default class MainLayout extends Component {
  render() {
    return (
      <Container fluid="true" id="container">
        <Row>
          <Col id="navbar" sm="12"><Navbar /></Col>
          <Col id="sidebar" sm="2" className="no-padding">
            <Sidebar />
          </Col>
          <Col id="body" className="no-padding">
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}
