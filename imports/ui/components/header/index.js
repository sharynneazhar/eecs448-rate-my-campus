import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">RATE MY CAMPUS</div>
        <div className="header-login">
          <a href="#">LOG IN</a>
          <span className="header-login-separator"> / </span>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    );
  }
}
