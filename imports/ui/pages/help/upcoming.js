import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import ui from '../../components';

class Upcoming extends Component {

  render() {
    return (
      <div>
        <div className="help-section-page">
          <div className="help-section-title">
            Help
          </div>
          <div className="help-section-main">
            <div className="help-section-nav-sidebar">
              <ui.HelpNav />
            </div>
            <div className="help-section-content">
              <h1>Upcoming</h1>
              <br />
              <h4>Administrative Login</h4>
              <p>Campus adminstrations would have access to the database information for their particular campus information. Ability to add and remove buildings and classrooms.</p>
              <br />
              <h4>Recent Reviews</h4>
              <p>Brief preview of the most recent reviews on the homepage. Would include building/classroom, overall rating and the first few lines of any commentary.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Upcoming.propTypes = {};

export default Upcoming;
