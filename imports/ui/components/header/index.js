import React, {
  Component,
} from 'react';
import { Link, } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="header-link">
            <div className="navbar-header">
              <div className="header-title">
              RATE MY CAMPUS
              </div>
            </div>
          </Link>
          <div className="navbar-text navbar-right header-help">
            <Link to="/help" className="header-help-link">HELP</Link>
          </div>
        </div>
      </div>
    );
  }
}
