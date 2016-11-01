import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

class Building extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      building: {},
    };
    Meteor.subscribe('buildings');
    this.findBuilding = this.findBuilding.bind(this);
  }

  findBuilding() {
    let building = Buildings.findOne({ _id: this.props.params.buildingId, });
    this.setState({
      loaded: true,
      building: building,
    });
  }

  render() {
    // TODO: figure out how to load async data requests
    // NOTE: for now, click the button to load data.
    return (
      <div>
        {this.state.loaded ? (
          <div className="container">
            <div className="building-map-bg"></div>
            <div className="building-details">
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
          </div>
        ) : <div></div>}

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
