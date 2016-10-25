import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ui from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="find-section">
          <div className="find-section-title">
            Find a building
          </div>
          <input
            className="searchbar"
            type="text"
            placeholder="building name"
          />
          <ui.Button
            style="btn-default"
            text="Search"
            onClick={() => {}}
          />
        </div>

        <div className="recent-rating-section">
          <div className="recent-rating-title">Recent Ratings</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
