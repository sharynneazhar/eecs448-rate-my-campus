import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Buildings, { findBuildingByName, } from '../../../api/buildings';
import Rooms, { findRoomByName, } from '../../../api/rooms';
import SearchResults from '../../pages/searchResults';

export default SearchResultsContainer = createContainer(({ params }) => {
  const { query } = params;
  const buildingSub = Meteor.subscribe('buildings');
  const roomSub = Meteor.subscribe('rooms');
  const loading = !buildingSub.ready() && !roomSub.ready();
  const buildings = findBuildingByName(query);
  const rooms = findRoomByName(query);
  const results = buildings.concat(rooms);
  return {
    loading,
    buildings,
    rooms,
    results,
  }
}, SearchResults);
