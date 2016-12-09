import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link, } from 'react-router'
import { moment } from 'meteor/momentjs:moment';
import { findBuildingById, findBuildingByNumber, } from '../../../api/buildings';
import { findRoomById } from '../../../api/rooms';
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

  formatDate = (date) => {
    return moment(date).format('MMM D, YYYY');
  }

  getName = (type, id) => {
    return type === 'building' ? findBuildingById(id).name : findRoomById(id).name;
  }

  getUrl = (review) => {
    if (review.type === 'building') {
      return `building/${review._id}`;
    } else if (review.type === 'room') {
      return `room/${review.facilityId}/${review._id}`;
    }
    return null;
  }

  renderRecentReviews = () => {
    let reviews = this.props.reviews.map((review, idx) => {
      return (
        <Link key={idx} className="recent-rating-card" to={this.getUrl(review)}>
          <div className="recent-rating-card-name">
            {this.getName(review.type, review.facilityId)}
          </div>
          <div className="recent-rating-card-comment">
            {review.comments}
          </div>
        </Link>
      );
    });
    return <div className="recent-rating-container">{reviews}</div>;
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
