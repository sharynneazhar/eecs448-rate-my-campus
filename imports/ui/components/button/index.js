import React, {
  Component,
  PropTypes
} from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type={this.props.type}
        className={this.props.style}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.oneOf([
    'btn-default',
    'btn-default-invert',
    'btn-lavender',
    'btn-lavender-invert',
    'btn-blue',
    'btn-blue-invert',
    'btn-green',
    'btn-green-invert',
    'btn-red',
    'btn-red-invert',
  ])
};
