import React, {
  Component,
  PropTypes
} from 'react';
import ui from '../../components';
import BS from 'bootstrap';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  renderForm() {
    if(this.props.type == "Building"){
      return (
        <form method="post">
          <div className="form-group">
            <label htmlFor="internet" className="control-label">Internet</label>
            <input type="text" name="internet" />
          </div>
          <div className="form-group">
            <label htmlFor="study-areas" className="control-label">Study Areas</label>
            <input type="text" name="study-areas" />
          </div>
          <div className="form-group">
            <label htmlFor="parking" className="control-label">Parking</label>
            <input type="text" name="parking" />
          </div>
          <div className="form-group">
            <label htmlFor="dining" className="control-label">Dining</label>
            <input type="text" name="dining" />
          </div>
          <div className="form-group">
            <label htmlFor="restrooms" className="control-label">Restrooms</label>
            <input type="text" name="restrooms" />
          </div>
          <div className="form-group">
            <label htmlFor="trash" className="control-label">Trash Maintenance</label>
            <input type="text" name="trash" />
          </div>
          <div className="form-group">
            <label htmlFor="vending" className="control-label">Vending Machines</label>
            <input type="text" name="vending" />
          </div>
          <div className="form-group">
            <label htmlFor="access" className="control-label">Accessibility</label>
            <input type="text" name="access" />
          </div>
          <div className="form-group form-inline">
            <label htmlFor="graduation" className="control-label">Graduation Date</label>
            <input type="text" className="form-control" name="graduation" />
          </div>
          <div className="form-group form-inline">
            <label htmlFor="comments" className="control-label">Comments</label>
            <textarea className="form-control" rows="5" id="comments"></textarea>
          </div>
          <ui.Button
            type="submit"
            text="Review"
            style="btn-lavender btn btn-lg"
          />
        </form>
      );
    }
    else if(this.props.type == "Room"){
      return (
        <form method="post">
          <div className="form-group">
            <label htmlFor="outlets" className="control-label">Outlets</label>
            <input type="text" name="outlets" />
          </div>
          <div className="form-group">
            <label htmlFor="tech" className="control-label">Technology</label>
            <input type="text" name="tech" />
          </div>
          <div className="form-group">
            <label htmlFor="seating" className="control-label">Seating</label>
            <input type="text" name="seating" />
          </div>
          <div className="form-group">
            <label htmlFor="desks" className="control-label">Desks</label>
            <input type="text" name="desks" />
          </div>
          <div className="form-group">
            <label htmlFor="lighting" className="control-label">Lighting</label>
            <input type="text" name="lighting" />
          </div>
          <div className="form-group">
            <label htmlFor="visibility" className="control-label">Visibility</label>
            <input type="text" name="visibility" />
          </div>
          <div className="form-group">
            <label htmlFor="audibility" className="control-label">Audibility</label>
            <input type="text" name="audibility" />
          </div>
          <div className="form-group">
            <label htmlFor="clean" className="control-label">Cleanliness</label>
            <input type="text" name="clean" />
          </div>
          <div className="form-group form-inline">
            <label htmlFor="graduation" className="control-label">Graduation Date</label>
            <input type="text" className="form-control" name="graduation" />
          </div>
          <div className="form-group form-inline">
            <label htmlFor="comments" className="control-label">Comments</label>
            <textarea className="form-control" rows="5" id="comments"></textarea>
          </div>
          <ui.Button
            type="submit"
            text="Review"
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
};
