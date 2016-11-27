import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

class FAQ extends Component {

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
              <h1>FAQ</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FAQ.propTypes = {};

export default FAQ;
