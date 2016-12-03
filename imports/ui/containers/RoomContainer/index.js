import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Buildings from '../../../api/buildings';
import Reviews from '../../../api/reviews';
import Rooms from '../../../api/rooms';
import Room from '../../pages/room';

export default RoomContainer = createContainer(({ params }) => {
  const { facilityId, roomId } = params;
  const bSubscription = Meteor.subscribe('buildings');
  const rSubscription = Meteor.subscribe('reviews');
  const roomSubscription = Meteor.subscribe('rooms');
  const loading = !bSubscription.ready() || !rSubscription.ready() || !roomSubscription.ready();
  const room = Rooms.findOne({ _id: roomId });
  const building = Buildings.findOne({ _id: facilityId });
  const reviews = Reviews.find({ type: 'room', facilityId: roomId }).fetch();
  return {
    loading,
    reviews,
    building,
    room,
  }
}, Room);
