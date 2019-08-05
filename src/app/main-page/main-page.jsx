import React, { Component } from 'react'
import Home from 'app/home/home';
import About from 'app/about/about';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}
