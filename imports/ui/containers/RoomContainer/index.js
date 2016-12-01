import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Reviews } from '../../../api/reviews/reviews.js';
import { Rooms } from '../../../api/rooms/rooms.js';
import Room from '../../pages/room';

export default RoomContainer = createContainer(({ params }) => {
  const { facilityId, roomId } = params;
  const bHandle = Meteor.subscribe('buildings');
  const rHandle = Meteor.subscribe('reviews');
  const roomHandle = Meteor.subscribe('rooms');
  const loading = !bHandle.ready() || !rHandle.ready() || !roomHandle.ready();
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