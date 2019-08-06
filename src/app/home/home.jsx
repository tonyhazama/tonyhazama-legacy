import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import emblem from 'assets/images/emblem.png'

export default class Home extends Component {
  render() {
    return (
      <Container fluid="true" id="home">
        <Container className="fullpage">
          <Row className="fullscreen center">
            <Col sm="2">
              {/* <img src={emblem} alt="T"/> */}
            </Col>
            <Col sm="8" className="text-left white">
              <h1 className="name">Muhammad Sultoni</h1>
              <h3 className="job">Web Developer</h3>
              <p className="desc">
                I’m a Professional Web Developer, passionate about
                design & creative work. Curently Working as a fulltime web dev 
                and freelance graphics designer. I read books,  
                play video game  and watch movie in my freetime.
              </p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>
     )
  }
}
