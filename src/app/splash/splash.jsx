import React, { Component } from 'react'
import logo from 'assets/images/logo.png';
import LoadingText from 'shared/components/loading-text/loading-text';

export default class Splash extends Component {
  render() {
    return (
      <div className="fullscreen center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="image"><img src={logo} alt=""/></div>
          <h5><LoadingText dotCount="5" interval="500" text="Comencing teleportation " /></h5>
        </div>
      </div>
    )
  }
}
