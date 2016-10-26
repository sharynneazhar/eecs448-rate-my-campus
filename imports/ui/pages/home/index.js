import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

Meteor.subscribe('buildings');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.findBuilding = this.findBuilding.bind(this);
  }

  handleInput(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  findBuilding(e) {
    console.log(Buildings.find({
      name: {
        $regex: this.state.searchInput,
        $options: 'i'
      },
    }).fetch());
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
            onChange={this.handleInput}
          />
          <ui.Button
            style="btn-default"
            text="Search"
            onClick={this.findBuilding}
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
