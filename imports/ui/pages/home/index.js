import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    Meteor.subscribe('buildings');
    this.handleInput = this.handleInput.bind(this);
    this.findBuilding = this.findBuilding.bind(this);
  }

  handleInput(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  findBuilding(e) {
    e.preventDefault();
    let query = Buildings.find({
      name: {
        $regex: this.state.searchInput,
        $options: 'i'
      },
    }).fetch();
    let url = `/building/${query[0].name}`;
    this.props.history.push(url);
  }

  render() {
    return (
      <div>
        <div className="find-section">
          <div className="find-section-title">
            Find a Building
          </div>
          <form className="searchForm" onSubmit={this.findBuilding}>
            <ui.SearchInput
              type="text"
              placeholder="building name"
              onChange={this.handleInput}
            />
            <ui.Button
              style="btn-lavender btn btn-xl"
              type="submit"
              text="Search"
            />
          </form>
        </div>
        <div className="recent-rating-section">
          <div className="recent-rating-title">Recent Ratings</div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
