import React, {
  Component,
  PropTypes
} from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router'
import Buildings, { findBuildingByName, } from '../../../api/buildings';
import Rooms, { findRoomByNumber, } from '../../../api/rooms';
import ui from '../../components';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
     searchInput: '',
    };
    Meteor.subscribe('buildings');
    this.handleInput = this.handleInput.bind(this);
    this.findBuilding = this.findBuilding.bind(this);
  }

  handleInput(e) {
    this.setState({
     searchInput: e.target.value,
    });
  }

  findBuilding(e) {
    e.preventDefault();
    let query = Buildings.find({
     name: {
        $regex: this.state.searchInput,
        $options: 'i'
     },
    }).fetch();
    let url = `/building/${query[0].name}`;
    this.props.history.push(url);
  }

  render() {
       return (
        <div>
          <div className="find-section">
            <div className="find-section-title">
              Find a building
            </div>
            <form className="searchForm" onSubmit={this.search}>
              <ui.SearchInput
                type="text"
                placeholder="building name"
                onChange={this.handleInput}
              />
              <ui.Button
                style="btn-lavender btn btn-xl"
                type="submit"
                text="Search"
              />
            </form>
          </div>
          <div className="search-results-list">
               <div className="theResults">
                    <div className="results-heading">
                         <div className="search-results-title">Search Results</div>
                         <div className="search-results-found">Showing 1-3 of 3 Found</div>
                    </div>
                    <div className="actual-results">

                    </div>
               </div>
          </div>
        </div>
      );
  }
}

SearchResults.propTypes = {};

export default SearchResults;
