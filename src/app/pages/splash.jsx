import React, { Component } from 'react'
import logo from 'assets/images/transparent-logo-small.png';
import LoadingText from 'shared/components/loading-text/loading-text';

export default class Splash extends Component {
  render() {
    return (
      <div className="fullpage center" style={{backgroundColor: '#151212'}}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="image"><img src={logo} alt=""/></div>
          <h5><LoadingText dotCount="5" interval="300" color="#eeeeee" text="Comencing teleportation " /></h5>
        </div>
      </div>
    )
  }
}
