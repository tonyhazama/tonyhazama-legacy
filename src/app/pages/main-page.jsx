import React, { Component } from 'react'
import Home from 'app/section/home';
import About from 'app/section/about';
import Portfolio from 'app/section/portfolio';
import Contact from 'app/section/contact';
import Footer from 'shared/components/footer/footer';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  render() {
    return (
      <div>
        <Home />
        <About theme={'dim'} />
        <Portfolio theme={'light'} />
        <Contact theme={'light'} />
        <Footer />
      </div>
    )
  }
}
