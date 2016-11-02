import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Reviews } from '../../../api/reviews/reviews.js';
import Building from '../../pages/building';

export default BuildingContainer = createContainer(({ params }) => {
  const { buildingId } = params;
  const bHandle = Meteor.subscribe('buildings');
  const rHandle = Meteor.subscribe('reviews');
  const loading = !bHandle.ready() || !rHandle.ready();
  const building = Buildings.findOne({ name: buildingId });
  const reviews = Reviews.findOne({ type: 'building' });
  return {
    loading,
    building,
    reviews,
  }
}, Building);
