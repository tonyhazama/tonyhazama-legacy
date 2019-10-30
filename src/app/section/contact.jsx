import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activePortfolio: undefined
    }
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={"section " + theme} id="contact">
        <Container className="page" style={{paddingTop: '40px', paddingBottom: '40px'}}>
          {/* <h4 className="section-title text-center">Contact</h4> */}
          <h5 style={{color: '#102629', textAlign: 'center', marginBottom: '1em'}}>
            To get in touch, write to &nbsp;
            <a href="mailto:tonyhazama4721@gmail.com" style={{textDecoration: 'underline', color: '#102629'}}>tonyhazama4721@gmail.com</a>
          </h5>
          <p className="text-center">or find more on here</p>
          <div className="actions center">
            <a href='https://github.com/tonyhazama/vmdlab' target='_blank' className="action"><i className="fab fa-github" title="View on Github"></i></a>
            <a href='https://github.com/tonyhazama/vmdlab' target='_blank' className="action"><i className="fab fa-behance-square" title="View on Github"></i></a>
            <a href='https://github.com/tonyhazama/vmdlab' target='_blank' className="action"><i className="fab fa-instagram" title="View on Github"></i></a>
            {/* <a href='https://tonyhazama.github.io/vmdlab/' target='_blank' className="action"><i className="fas fa-globe-asia" title="Live Preview"></i></a> */}
        </div>
        </Container>
      </div>
    )
  }
}
