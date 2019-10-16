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
        <Container className="page">
          <h4 className="section-title">Contact</h4>
          <p className="text medium">
            I’m a Professional Web Developer, passionate about
            design & creative work. Curently Working as a fulltime web dev 
            and freelance graphics designer. I read books,  
            play video game  and watch movie in my freetime.
          </p>
          <p className="text medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Magni perferendis, aperiam ea minus cumque atque explicabo dignissimos 
            sit quas neque quibusdam quaerat nostrum reprehenderit deserunt id. 
            Aperiam numquam ratione nisi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Doloribus ex unde beatae blanditiis et, officiis odio ea! Quidem 
            in esse rem repellat? Similique dolor minus tempora,
            doloremque aperiam repellendus exercitationem?
          </p>
          <p className="text medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Magni perferendis, aperiam ea minus cumque atque explicabo dignissimos 
            sit quas neque quibusdam quaerat nostrum reprehenderit deserunt id. 
            Aperiam numquam ratione nisi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Doloribus ex unde beatae blanditiis et, officiis odio ea! Quidem 
            in esse rem repellat? Similique dolor minus tempora,
            doloremque aperiam repellendus exercitationem?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Magni perferendis, aperiam ea minus cumque atque explicabo dignissimos 
            sit quas neque quibusdam quaerat nostrum reprehenderit deserunt id. 
            Aperiam numquam ratione nisi!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Doloribus ex unde beatae blanditiis et, officiis odio ea! Quidem 
            in esse rem repellat? Similique dolor minus tempora,
            doloremque aperiam repellendus exercitationem?
          </p>
        </Container>
      </div>
    )
  }
}
