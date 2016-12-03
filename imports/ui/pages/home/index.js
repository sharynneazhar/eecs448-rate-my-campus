import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import Buildings from '../../../api/buildings';
import Rooms from '../../../api/rooms';
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
    let query = null;
    let queryOption = { $regex: this.state.searchInput, $options: 'i', };
    let url = null;

    if (this.isEmpty()) {
      this.setState({ showError: true, });
      return null;
    }

    switch (this.state.routeType) {
      case 'building':
        query = Buildings.find({ name: queryOption, }).fetch();
        url = `/building/${query[0]._id}`;
        break;
      case 'room':
        query = Rooms.find({ roomNumber: queryOption, }).fetch();
        url = `/room/${query[0].facilityId}/${query[0]._id}`;
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
          {this.renderRecentReviews()}
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;
