import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

class Help extends Component {

  render() {
    return (
      <div>
        <div className="help-section">
          <div className="help-section-title">
            Help
          </div>
          <div className="help-section-nav-main">
            <div className="help-nav-item">
              <Link to="/help/how-to">
                <ui.Button
                  style="btn-lavender btn btn-lg"
                  text="How To"
                />
              </Link>
            </div>
            <div className="help-nav-item">
              <Link to="/help/ratings">
                <ui.Button
                  style="btn-lavender btn btn-lg"
                  text="Ratings"
                />
              </Link>
            </div>
            <div className="help-nav-item">
              <Link to="/help">
                <ui.Button
                  style="btn-lavender btn btn-lg"
                  text="????"
                />
              </Link>
            </div>
            <div className="help-nav-item">
              <Link to="/help/FAQ">
                <ui.Button
                  style="btn-lavender btn btn-lg"
                  text="FAQ"
                />
              </Link>
            </div>
            <div className="help-nav-item">
              <Link to="/help/contact">
                <ui.Button
                  style="btn-lavender btn btn-lg"
                  text="Contact"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Help.propTypes = {};

export default Help;
