import React, {
  Component,
  PropTypes
} from 'react';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className="searchbar"
        type={this.props.type}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        value={this.props.value || undefined}
      />
    );
  }
}

SearchInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};
