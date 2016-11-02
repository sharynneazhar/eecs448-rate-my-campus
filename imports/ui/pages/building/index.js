import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Reviews } from '../../../api/reviews/reviews.js';

class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      building: {},
      reviews: {},
    };
    Meteor.subscribe('buildings');
    Meteor.subscribe('reviews');
    this.findBuilding = this.findBuilding.bind(this);
    this.getReviews = this.getReviews.bind(this);
  }

  findBuilding() {
    // TODO: change this back to id once we deploy
    let building = Buildings.findOne({ name: 'Learned Engineering Expansion Phase 2 (LEEP2)', });
    this.setState({
      loaded: true,
      building: building,
    });
  }

  getReviews() {
    // TODO: change this back to id once we deploy
    return Reviews.findOne({ type: 'building' });
  }

  render() {
    // TODO: figure out how to load async data requests
    // NOTE: for now, click the button to load data.
    let reviews = this.getReviews();
    return (
      <div>
        {this.state.loaded ? (
          <div>
            <div className="building-map-bg"></div>
            <div className="container building-details">
              <div className="building-name">
                {this.state.building.name}
              </div>
              <div className="building-address">
                <div className="building-address-top">
                  {this.state.building.address.street}
                </div>
                <div className="building-address-bottom">
                  {this.state.building.address.city},&nbsp;
                  {this.state.building.address.state}&nbsp;
                  {this.state.building.address.zip}&nbsp;
                </div>
              </div>
              <a className="btn-default-invert building-map-btn"
                href={"https://maps.google.com?q=" + this.state.building.address.full}
                target="_blank">MAP</a>
            </div>
            <div className="row container center-block overall-rating">
              <div className="col-xs-4 overall-quality">
                OVERALL QUALITY
                <div className="overall-quality-value">4.2</div>
              </div>
              <div className="col-xs-7 col-xs-offset-1">
                <ui.RatingsList parameters={reviews.ratings} />
              </div>
            </div>
          </div>
        ) : <div />}

        <ui.Button
          style="btn-lavender"
          text="bleh"
          onClick={this.findBuilding}
        />
      </div>
    );
  }
}

Building.propTypes = {};

export default Building;
