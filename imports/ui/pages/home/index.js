import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Rooms } from '../../../api/rooms/rooms.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeType: this.props.route.type || 'building',
      searchInput: '',
    };
    Meteor.subscribe('buildings');
    Meteor.subscribe('rooms');
    this.renderRecentReviews = this.renderRecentReviews.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.search = this.search.bind(this);
  }

  handleInput(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  search(e) {
    e.preventDefault();
    let query = null;
    let url = null;

    if (this.state.searchInput.length <= 0) {
      alert('Invalid input');
      return null;
    }

    switch (this.state.routeType) {
      case 'building':
        query = Buildings.find({
          name: {
            $regex: this.state.searchInput,
            $options: 'i'
          },
        }).fetch();
        url = `/building/${query[0]._id}`;
        break;
      case 'room':
        query = Rooms.find({
          roomNumber: {
            $regex: this.state.searchInput,
            $options: 'i'
          },
        }).fetch();
        url = `/room/${query[0].facilityId}/${query[0]._id}`;
        break;
    }
    browserHistory.push(url);
  }

  renderRecentReviews() {
    let reviews = this.props.reviews.map((review, idx) => {
      return (
        <div key={idx}>- {review.comments}</div>
      );
    });

    return <div>{reviews}</div>;
  }

  render() {
    return (
      <div>
        <div className="find-section">
          <div className="find-section-title">
            Find a {this.props.route.type}
          </div>
          <form className="searchForm" onSubmit={this.search}>
            <ui.SearchInput
              type="text"
              placeholder={`${this.props.route.type} name`}
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
          <div className="recent-rating-title">Recent Reviews</div>
          {this.renderRecentReviews()}
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
