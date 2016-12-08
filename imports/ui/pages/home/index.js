import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import Buildings, { findBuildingByName, } from '../../../api/buildings';
import Rooms, { findRoomByName, } from '../../../api/rooms';
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
    browserHistory.push(`search/${this.state.searchInput}`);
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
          text={`Please enter a ${this.state.routeType} name.`}
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
            Find a {this.state.routeType}
          </div>
          <form className="searchForm" onSubmit={this.search}>
            <ui.SearchInput
              type="text"
              placeholder={`${this.state.routeType} name`}
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
