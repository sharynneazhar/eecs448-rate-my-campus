import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import ui from '../../components';

class Ratings extends Component {

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
              <h1>Ratings</h1>
              <br />
              <h3><b>Building</b></h3>
                <h4 id="internet">Internet</h4>
                  <p>Think about how good the internet connection is in this builiding. Is the connection bad or the overall internet of the university? Is the internet connection consistent throughout the building or just in certain parts?</p>
                <h4 id="study">Study Areas</h4>
                  <p>Does this building even have student study areas? If it does, are they some place you'd want to study? Think about their comfortability, lighting, cleanliness, noise, etc.</p>
                <h4 id="parking">Parking Lots</h4>
                 <p>How convenient are the parking lots near the building? Think about how close those lots are to the building and how convenient they are to park in. How often do you find an open spot?</p>
                <h4 id="dining">Dining</h4>
                  <p>Does the building have any form of food service? If it does, is the food worth eating? Would you recommend someone eat there or bring their own food from home? Is the food, worth the price you pay?</p>
                <h4 id="restrooms">Restrooms</h4>
                  <p>Think about how convenient the restrooms are in the building. Are they easy to find? Enough for the amount of people? How clean are they? Would you steer a friend to another building?</p>
                <h4 id="trash">Trash Maintance</h4>
                  <p>Is trash collected regularly? Often enough? Do you find yourself having to find a different trash can when you go to throw something away?</p>
                <h4 id="vending">Vending Machines</h4>
                  <p>Does the building have vending machines? Do they supply an adequate amount of junk food? An adequate amount of healthy foods? How often do they steal your money? Do they support credit card charges?</p>
                <h4 id="handicap">Handicap Accessible</h4>
                  <p>How handicap accessible is the building really? Is trying to use the accessbility more of an inconvenient than anything else?</p>
              <br />
              <h3><b>Classroom</b></h3>
                <h4 id="outlets">Outlets</h4>
                  <p>Does the room even have outlets? How often do you plug something in and the outlet doesn't work? Are you often fighting classmates for use to the outlet? Are they near enough where you sit?</p>
                <h4 id="technology">Technology</h4>
                  <p>Is the classroom like a blast from the past? Or a peek into the future? No matter the technology, how reliable is it? Are you often calling the IT department? Would you rather have a blackboard and some chalk?</p>
                <h4 id="seating">Seating</h4>
                  <p>There are probably enough seats for everyone in class, but are they really usable? Are seats often broken? Are they comfortable? Or are the uncomfortable and distracting?</p>
                <h4 id="desks">Desks</h4>
                  <p>Think about all surfaces in the room. Are they clean? Do they have cracks and blemishes? Uneven feet and wobble? Are they big enough? Or are do you find yourself trying to cram all the stuff you need on a small desk?</p>
                <h4 id="lighting">Lighting</h4>
                  <p>Is the room well lit? Do you have trouble trying to see things? To much light to see projector screens, or to little light to see the paper in front of you.</p>
                <h4 id="visibility">Visibility</h4>
                  <p>Do you often have trouble seeing your professor? The projector screen? Demonstratios? Do parts of the room have better visibility than others or is it all the same?</p>
                <h4 id="audibility">Audibility</h4>
                  <p>Can you hear your professor? What about videos? Can you hear classmates across the room?</p>
                <h4 id="cleanliness">Cleanliness</h4>
                  <p>Think about the overall cleanliness of the room. Are whiteboards/blackboards clean or smeared with marker/chalk remnants? Is the floor clear or littered with scraps? Trash cans overflowing or always available?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Ratings.propTypes = {};

export default Ratings;
