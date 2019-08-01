import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Splash from './splash/splash';
import Home from './home/home';
import MainLayout from 'layout/main/main';

// import './App.css';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 2000);
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <Splash />
    ) : (
      <MainLayout>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            {/* <Route path="/topics" component={Topics} /> */}
          </div>
        </Router>
      </MainLayout>
    );
  }
}

;
