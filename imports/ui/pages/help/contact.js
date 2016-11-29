import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

class Contact extends Component {

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
              <h1>Contact</h1>
              <br />
              <h3>Erin Coots</h3>
              <p>913.669.4484</p>
              <p>erincoots@ku.edu</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {};

export default Contact;
