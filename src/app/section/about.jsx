import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import profilePic from 'assets/images/ppc.jpg'

export default class About extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={"section"}  id="about">
        <Container className="page">
          <div className="row">
            <div className="col-md-4">
              <img src={profilePic} alt="s" style={{width: '100%'}}/>
            </div>
            <div className="col-md-8" style={{padding: '1em 2em'}}>
              <h4 className="section-title">About</h4>
              <p className="text medium">
                I’m a Professional Web Developer, passionate about
                design & creative work. Curently Working as a fulltime web dev 
                and freelance graphics designer. I read books,  
                play video game  and watch movie in my freetime.
              </p>
              <p className="text medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Vel, veniam nesciunt repellat quaerat architecto temporibus 
                consequatur laudantium porro laboriosam asperiores exercitationem minima sed, 
                consectetur dolorum eligendi quisquam at recusandae itaque!
              </p>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
