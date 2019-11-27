import React, { Component } from 'react'
import Home from 'app/section/home';
import About from 'app/section/about';
import Portfolio from 'app/section/portfolio';
import Contact from 'app/section/contact';
import Footer from 'shared/components/footer/footer';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { bodyXPos } from 'shared/functions/element';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
      showBackBtn: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.isSubmerged());
  }

  isSubmerged() {
    const homeHeight = document.getElementById('home').clientHeight;
    let showBackBtn;
    if (bodyXPos() > ((homeHeight) - 40)) { showBackBtn = true;
    } else { showBackBtn = false; }
    console.log(bodyXPos())
    this.setState({showBackBtn: showBackBtn})
  }

  render() {
    return (
      <div>
        <AnchorLink className="action" href='#home'>
          <div className={(!this.state.showBackBtn && "hidden ") + " button square dark back-top"}>
            <i className="fas fa-long-arrow-alt-up"></i>
          </div>
        </AnchorLink>
        <Home />
        <About theme={'dim'} />
        <Portfolio theme={'light'} />
        <Contact theme={'light'} />
        <Footer />
      </div>
    )
  }
}
