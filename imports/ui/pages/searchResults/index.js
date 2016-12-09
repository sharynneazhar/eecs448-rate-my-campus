import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link, } from 'react-router'
import { findBuildingByNumber, } from '../../../api/buildings';
import ui from '../../components';

class SearchResults extends Component {
  getUrl = (result) => {
    if (result.type === 'building') {
      return `building/${result._id}`;
    } else if (result.type === 'room') {
      const buildingId = findBuildingByNumber(result.buildingNumber)._id;
      return `room/${buildingId}/${result._id}`;
    }
    return null;
  }

  getDetail = (result) => {
    if (result.type === 'building') {
      return result.address.full;
    } else if (result.type === 'room') {
      return findBuildingByNumber(result.buildingNumber).name;
    }
    return null;
  }

  renderResults = () => {
    const results = this.props.results.map((result, idx) =>
      <Link key={idx} to={this.getUrl(result)} className="list-group-item">
        <div className="list-group-item-heading">{result.name}</div>
        <div className="list-group-item-text">{this.getDetail(result)}</div>
      </Link>
    );
    return this.props.loading ? <ui.LoadAnimation /> : results;
  }

  render() {
    return (
      <div className="search-results">
        <div className="container search-results-inner">
          <div className="row search-results-heading">
            {this.props.results.length} facilities found for your search
          </div>
          <div className="search-results-list list-group">
            {this.renderResults()}
          </div>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {};

export default SearchResults;
