import React, { Component, } from 'react';
import Spinner from 'react-spinkit';

export default class LoadingAnimation extends Component {
  render() {
    return (
      <div className="spinner-container">
        <Spinner spinnerName="wandering-cubes" />
      </div>
    );
  }
}
