import React, {
  Component,
  PropTypes
} from 'react';
import Spinner from 'react-spinkit';
import ui from '../../components';

class Building extends Component {
  renderBlock() {
    return (
      <div>
        <div className="building-map-bg"></div>
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
          <a className="btn-default-invert building-map-btn"
            href={"https://maps.google.com?q=" + this.props.building.address.full}
            target="_blank">MAP</a>
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

  renderSpinner() {
    return (
      <div className="spinner-container">
        <Spinner spinnerName="wandering-cubes" />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.loading ? this.renderSpinner() : this.renderBlock()}
      </div>
    );
  }
}

Building.propTypes = {};

export default Building;
