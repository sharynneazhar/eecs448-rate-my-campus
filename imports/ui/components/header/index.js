import React, {
  Component
} from 'react';
import { Link, } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="header-title">
              <Link to="/" className="header-link">RATE MY CAMPUS</Link>
            </div>
          </div>
          {/* <div className="navbar-text navbar-right header-login">
            <a href="#">LOG IN</a>
            <span className="header-login-separator">/</span>
            <a href="#">SIGN UP</a>
          </div> */}
        </div>
      </div>
    );
  }
}
