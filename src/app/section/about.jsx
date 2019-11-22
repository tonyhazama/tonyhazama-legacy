import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import profilePic from 'assets/images/ppc.jpg'

export default class About extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={"section " + theme}  id="about">
        <Container className="page">
          <div className="row">
            <div className="col-md-4">
              <div className="picture">
                <img src={profilePic} alt="s" style={{width: '100%'}}/>
              </div>
            </div>
            <div className="col-md-8" style={{padding: '1em 1.5em'}}>
              <h4 className="section-title">About</h4>
              <p className="text medium">
                I’m a Professional Web Developer, passionate about
                design & creative work. Currently Working as a fulltime web developer in Indonesia
                and freelancing as graphics designer. I read books,  
                play video game  and watch movie in my freetime.
              </p>
              <p className="text medium">
                I do karate as my primary sports. I also running and swimming occasionally. 
                I love cat, And other friendly furry animal. Im a man of science, open-minded
                and open to new ideas.
              </p>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
