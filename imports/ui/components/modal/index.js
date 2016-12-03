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
            <label htmlFor="quality" className="control-label">Quality</label>
            <input type="text" name="quality" />
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
            <label htmlFor="quality" className="control-label">Quality</label>
            <input type="text" name="quality" />
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
