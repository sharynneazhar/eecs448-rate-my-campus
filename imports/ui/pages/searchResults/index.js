import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ui from '../../components';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        Hello world!
      </div>
    );
  }
}

SearchResults.propTypes = {};

export default SearchResults;
