import React, {
  Component,
  PropTypes
} from 'react';
import ui from '../../components';
import BS from 'bootstrap';
import { addReview, } from '../../../api/reviews';

export default class Modal extends Component {
  addReview = (e) => {
    e.preventDefault();

    let review = null;
    if (this.props.type.toLowerCase() === 'building') {
      review = {
        type: this.props.type.toLowerCase(),
        facilityId: this.props.facilityId,
        dateReviewed: new Date(),
        ratings: {
          internet: parseInt(e.target.internet.value),
          studyAreas: parseInt(e.target.studyAreas.value),
          parking: parseInt(e.target.parking.value),
          dining: parseInt(e.target.dining.value),
          restrooms: parseInt(e.target.restrooms.value),
          trashMaintenance: parseInt(e.target.trashMaintenance.value),
          vendingMachines: parseInt(e.target.vendingMachines.value),
          accessibility: parseInt(e.target.accessibility.value)
        },
        comments: e.target.comments.value
      };
    } else if (this.props.type.toLowerCase() === 'room') {
      review = {
        type: this.props.type.toLowerCase(),
        facilityId: this.props.facilityId,
        dateReviewed: new Date(),
        ratings: {
          outlets: parseInt(e.target.outlets.value),
          technology: parseInt(e.target.technology.value),
          seating: parseInt(e.target.seating.value),
          desks: parseInt(e.target.desks.value),
          lighting: parseInt(e.target.lighting.value),
          visibility: parseInt(e.target.visibility.value),
          audibility: parseInt(e.target.audibility.value),
          cleanliness: parseInt(e.target.cleanliness.value)
        },
        comments: e.target.comments.value
      };
    }

    addReview.call(review, (error) => {
      if (error) {
        console.log("There was an error inserting mock review data: ", error);
      }
    });

  }

  renderForm = () => {
    if (this.props.type === "Building") {
      return (
        <form method="post" onSubmit={this.addReview}>
          <div className="form-group">
            <ui.Bar quality="Internet" color="green" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Study Areas" color="yellow" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Parking" color="orange" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Dining" color="red" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Restrooms" color="green" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Trash Maintenance" color="yellow" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Vending Machines" color="orange" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Accessibility" color="red" />
          </div>
          <div className="form-group form-inline">
            <label className="control-label">Graduation Date</label>
            <textarea className="form-control" rows="1" cols="42" name="graduation" />
          </div>
          <div className="form-group form-inline">
            <label className="control-label">Comments</label>
            <textarea className="form-control" rows="5" cols="42" name="comments" />
          </div>
          <ui.Button
            type="submit"
            text="Add Review"
            style="btn-lavender btn btn-lg"
          />
        </form>
      );
    } else if (this.props.type === "Room") {
      return (
        <form method="post" onSubmit={this.addReview}>
          <div className="form-group">
            <ui.Bar quality="Outlets" color="green" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Technology" color="yellow" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Seating" color="orange" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Desks" color="red" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Lighting" color="green" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Visibility" color="yellow" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Audibility" color="orange" />
          </div>
          <div className="form-group">
            <ui.Bar quality="Cleanliness" color="red" />
          </div>
          <div className="form-group form-inline">
            <label className="control-label">Graduation Date</label>
            <textarea className="form-control" rows="1" cols="42" name="graduation" />
          </div>
          <div className="form-group form-inline">
            <label className="control-label">Comments</label>
            <textarea className="form-control" rows="5" cols="42" name="comments" />
          </div>
          <ui.Button
            type="submit"
            text="Add Review"
            style="btn-lavender btn btn-lg"
          />
        </form>
      );
    }
    else{
      return (<div>Something went wrong</div>);
    }
  }

  render() {
    return (
      <div id={this.props.id} className="modal fade">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" data-dismiss="modal">&times;</span>
            <h3 className="modal-title">Review {this.props.type}</h3>
          </div>
          <div className="modal-body">
            {this.renderForm()}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  facilityId: PropTypes.string,
};
