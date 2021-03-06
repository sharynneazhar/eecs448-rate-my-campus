import React, {
  Component,
  PropTypes
} from 'react';
import ui from '../../components';

class School extends Component {
  renderBlock = () => {
    let url = `https://maps.google.com?q=${this.props.building.address.full}`;
    return (
      <div>
        <div className="container building-details">
          <div className="building-name">
            {this.props.building.name}
          </div>
          <div className="building-address">
            <div className="building-address-top">
              {this.props.building.address.street}
            </div>
            <div className="building-address-bottom">
              {this.props.building.address.city},&nbsp;
              {this.props.building.address.state}&nbsp;
              {this.props.building.address.zip}&nbsp;
            </div>
          </div>
          <a className="btn-default-invert building-map-btn" href={url} target="_blank">MAP</a>
        </div>
        <div className="row container center-block overall-rating">
          <div className="col-xs-4 overall-quality">
            OVERALL QUALITY
            <div className="overall-quality-value">4.2</div>
          </div>
          <div className="col-xs-7 col-xs-offset-1">
            <ui.RatingsList parameters={this.props.reviews.ratings} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.loading ? <ui.LoadAnimation /> : this.renderBlock()}
        <div className="row container center-block button-group">
          <div className="col-xs-3 col-xs-offset-6">
            <ui.Button
              style="btn-lavender btn btn-lg"
              text="Find a Classroom"
            />
          </div>
          <div className="col-xs-3">
            <ui.Button
              style="btn-lavender btn btn-lg"
              text="Rate this Building"
            />
          </div>
        </div>
      </div>
    );
  }
}

School.propTypes = {};

export default School;
