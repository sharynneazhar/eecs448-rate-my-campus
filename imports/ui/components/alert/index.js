import React, {
  Component,
  PropTypes,
} from 'react';

export default class Alert extends Component {
  render() {
    let style = this.props.type === 'error' ? 'danger' : this.props.type;
    return (
      <div className={`container alert alert-${style} alert-dismissible`}>
        {this.props.text}
        <button
          type="button"
          className="close pull-right"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
