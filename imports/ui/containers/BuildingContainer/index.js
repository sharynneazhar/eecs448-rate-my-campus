import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Reviews } from '../../../api/reviews/reviews.js';
import Building from '../../pages/building';

export default BuildingContainer = createContainer(({ params }) => {
  const { buildingId } = params;
  const bSubscription = Meteor.subscribe('buildings');
  const rSubscription2 = Meteor.subscribe('reviews');
  const loading = !bSubscription.ready() || !rSubscription2.ready();
  const building = Buildings.findOne({ _id: buildingId });
  const reviews = Reviews.find({ type: 'building', facilityId: buildingId }).fetch();
  return {
    loading,
    building,
    reviews,
  }
}, Building);
