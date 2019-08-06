import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Splash from './splash/splash';
import Home from './home/home';
import Layout from 'app/layout/layout';
import MainPage from 'app/main-page/main-page';

// import './App.css';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
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
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <div id="router-wrapper">
            <Route exact path="/" component={MainPage} />
            <Route path="/home" component={Home} />
            {/* <Route path="/topics" component={Topics} /> */}
          </div>
        </Router>
      </Layout>
    );
  }
}

;
