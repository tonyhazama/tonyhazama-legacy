import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export default class About extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={"section " + theme}>
        <Container className="fullpage page" id="about">
          <h4 className="text small bold">About</h4>
            <p className="text small">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Vel, veniam nesciunt repellat quaerat architecto temporibus 
              consequatur laudantium porro laboriosam asperiores exercitationem minima sed, 
              consectetur dolorum eligendi quisquam at recusandae itaque!
            </p>
            <p className="text small">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Vel, veniam nesciunt repellat quaerat architecto temporibus 
              consequatur laudantium porro laboriosam asperiores exercitationem minima sed, 
              consectetur dolorum eligendi quisquam at recusandae itaque!
            </p>
        </Container>
      </div>
    )
  }
}
