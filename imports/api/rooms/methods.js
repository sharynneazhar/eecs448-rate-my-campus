import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Rooms from '../rooms';

export const addRoom = new ValidatedMethod({
  name: 'Rooms.methods.insert',
  validate: new SimpleSchema({
    type: { type: String },
    name: { type: String },
    facilityId: { type: String },
    overallQuality: { type: Number, decimal: true },
    averageRatings: { type: Object, blackbox: true },
  }).validator(),
  run(room) {
    Rooms.insert(room);
  }
});

export const removeRoom = new ValidatedMethod({
  name: 'Rooms.methods.remove',
  validate: new SimpleSchema({
    _id: { type: String }
  }).validator(),
  run({ _id }) {
    Rooms.remove(_id);
  }
});

export const updateRoomAverages = new ValidatedMethod({
  name: 'Rooms.methods.updateRoomAverages',
  validate: new SimpleSchema({
    _id: { type: String },
    "overallQuality": { type: Number, decimal: true },
    "averageRatings": { type: Object, blackbox: true },
  }).validator(),
  run({ _id, overallQuality, averageRatings }) {
    Rooms.update(_id, {
      $set: {
        overallQuality: overallQuality,
        averageRatings: averageRatings
      }
    });
  }
});

export const findRoomsInBuilding = (facilityId) => {
  return Rooms.find({ facilityId, }).fethc();
}

export const findRoomByName = (name) => {
  return Rooms.find({
    name: {
      $regex: name,
      $options: 'i',
    },
  }).fetch();
}

export const findRoomById = (_id) => {
  return Rooms.findOne({ _id, });
}
