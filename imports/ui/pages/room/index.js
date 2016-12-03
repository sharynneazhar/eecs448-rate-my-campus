import React, {
  Component,
  PropTypes
} from 'react';
import Spinner from 'react-spinkit';
import ui from '../../components';

class Room extends Component {
  renderMap() {
    let url = `https://maps.google.com?q=${this.props.building.address.full}`;
    return (
      <div>
        <div className="container building-details">
          <div className="building-name">
            {this.props.room.roomNumber}
          </div>
          <div className="building-address">
            <div>
              {this.props.building.name}
            </div>
            <div>
              {this.props.building.address.street}
            </div>
            <div>
              {this.props.building.address.city},&nbsp;
              {this.props.building.address.state}&nbsp;
              {this.props.building.address.zip}&nbsp;
            </div>
          </div>
          <a className="btn-default-invert building-map-btn" href={url} target="_blank">MAP</a>
        </div>
      </div>
    );
  }

  renderOverallRatings() {
    if (this.props.reviews.length !== 0) {
      return (
        <div className="row container center-block overall-rating">
          <div className="col-xs-4 overall-quality">
            OVERALL QUALITY
            <div className="overall-quality-value">
              {this.props.room.overallQuality.toFixed(1)}
            </div>
          </div>
          <div className="col-xs-7 col-xs-offset-1">
            <ui.RatingsList parameters={this.props.reviews[0].ratings} />
          </div>
        </div>
      );
    }
    return null;
  }

  renderSpinner() {
    return (
      <div className="spinner-container">
        <Spinner spinnerName="wandering-cubes" />
      </div>
    );
  }

  formatDate(date) {
    return moment(date).format('MMM D, YYYY');
  }

  renderReviews() {
    if (this.props.reviews.length === 0) {
      return (<div>Be first to review this building.</div>);
    }

    const reviews = this.props.reviews.map((review, index) =>
      <div
        key={review._id}
        className={"row" + (index % 2 ? "" : " grey-row")}
      >
        <div className="col-xs-6 review-inner review-right-border">
          <ui.RatingsList parameters={review.ratings} />
        </div>
        <div className="col-xs-6 review-inner">
          <div className="review-date">
            {this.formatDate(review.dateReviewed)}
          </div>
          <div>{review.comments}</div>
        </div>
      </div>
    );
    return <div>{reviews}</div>;
  }

  renderModal() {
    return (
      <ui.Modal
        type="Room"
        id="RReview"
      />
    )
  }

  show(e) {
    $("#RReview").modal("show");
  }

  render() {
    return (
      <div>
        {this.props.loading ? this.renderSpinner() : this.renderMap()}
        {this.renderOverallRatings()}
        <div className="container button-group">
          <ui.Button
            style="btn-lavender btn btn-lg"
            text="Rate this Room"
            onClick={this.show}
          />
        </div>
        <div className="row container center-block">
          {this.renderReviews()}
        </div>
      </div>
    );
  }
}

Room.propTypes = {};

export default Room;
