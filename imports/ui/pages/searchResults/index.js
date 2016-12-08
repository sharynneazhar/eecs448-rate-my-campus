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
      <Link key={idx} to={this.getUrl(result)} className="">
        <div className="">{result.name}</div>
        <div className="">{this.getDetail(result)}</div>
      </Link>
    );
    return this.props.loading ? <ui.LoadAnimation /> : results;
  }

  render() {
    return (
      <div className="search-results-list">
        <div className="theResults">
          <div className="results-heading">
            <div className="search-results-title">
              Search Results
            </div>
            <div className="search-results-found">
              Found {this.props.results.length} results
            </div>
          </div>
          <div className="actual-results">
            {this.renderResults()}
          </div>
        </div>
      </div>
    );
  }
}

SearchResults.propTypes = {};

export default SearchResults;
