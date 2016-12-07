import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import Buildings, { findBuildingByName, } from '../../../api/buildings';
import Rooms, { findRoomByNumber, } from '../../../api/rooms';
import ui from '../../components';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeType: props.route.type || 'building',
      searchInput: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  }

  isEmpty = () => {
    return this.state.searchInput.length <= 0;
  }

  search = (e) => {
    e.preventDefault();

    if (this.isEmpty()) {
      this.setState({ showError: true, });
      return null;
    }

    let url = null;
    switch (this.state.routeType) {
      case 'building':
        let building = findBuildingByName(this.state.searchInput);
        url = `/building/${building[0]._id}`;
        break;
      case 'room':
        let room = findRoomByNumber(this.state.searchInput);
        url = `/room/${room[0].facilityId}/${room[0]._id}`;
        break;
    }
    browserHistory.push(url);
  }

  renderRecentReviews = () => {
    let reviews = this.props.reviews.map((review, idx) => {
      return (
        <div key={idx}>- {review.comments}</div>
      );
    });
    return <div>{reviews}</div>;
  }

  renderError = () => {
    if (this.state.showError) {
      return (
        <ui.Alert
          type="error"
          text={`Please enter a ${this.props.route.type} name.`}
        />
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        {this.renderError()}
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
          {this.props.loading ? <ui.LoadAnimation /> : this.renderRecentReviews()}
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
