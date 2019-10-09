import React, { Component } from 'react'

export default class LoadingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dots: '.'
    }
  }

  updateDots = () => {
    let { dots } = this.state;
    const { dotCount = 3} = this.props;
    if (dots.length < dotCount) {
      dots += '.';
    } else {
      dots = '.';
    }
    this.setState({ dots: dots });
  }

  componentDidMount() {
    const { interval = 500 } = this.props;
    setInterval(this.updateDots, interval);
  }
  

  render() {
    const { color = '#151212' } = this.props;
    return <span style={{color: color}}>{this.props.text} {this.state.dots}</span>
  }
}
