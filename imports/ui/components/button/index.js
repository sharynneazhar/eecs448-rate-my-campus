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
  onClick: PropTypes.func.isRequired,
  style: PropTypes.oneOf([
    'btn-default',
    'btn-default-invert',
    'btn-green',
    'btn-green-invert',
  ])
};
