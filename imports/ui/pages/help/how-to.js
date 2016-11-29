import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import ui from '../../components';
import { Buildings } from '../../../api/buildings/buildings.js';

class HowTo extends Component {

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
              <h1>How To</h1>
              <br />
              <h3><b>Search</b></h3>
                <h4>Building</h4>
                  <p>Input the name of the building or part of it into the textbox. After clicking on the search button a new page should load with suggested results. Click on the one you wanted to see.</p>
                <h4>Classroom</h4>
                  <p>Input the classroom name or number into the textbox. After clicking on the search button a new page should load with suggested results. If you only entered a portion of the room number the results displayed will be based on a query of room numbers with matching digits starting on the left. Click on the one you wanted to see.</p>
              <h3><b>Read Ratings</b></h3>
                <p>At the top of the page are the averages of the all ratings for each category. The overall rating is the averages of all of those ratings.</p>
                <p>Each individual rating has ratings for each category on a scale from 0 to 5. Those are the quantitative ratings, each rating also has a qualitative review in the form of a short testimonial.</p>
              <h3><b>Add Ratings</b></h3>
                <p>Each building and classroom page has an "Add Rating" button that opens a pop-up. Starting at the top are scales for rating by categories, then the year of a raters graduation. Finally a place to leave a testimony and any comments.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HowTo.propTypes = {};

export default HowTo;
