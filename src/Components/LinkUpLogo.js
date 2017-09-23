import React, { Component } from 'react';
import logo from '../images/Logo.png';

class LinkUpLogo extends Component {
  render() {
    return <img width={this.props.proportion} src={logo} alt="logo" />;
  }
}

export default LinkUpLogo;
