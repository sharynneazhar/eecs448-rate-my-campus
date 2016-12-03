import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Rooms from '../rooms';

export const addRoom = new ValidatedMethod({
  name: 'Rooms.methods.insert',
  validate: new SimpleSchema({
    roomNumber: { type: String },
    facilityId: { type: String },
    description: { type: String },
    "overallQuality": { type: Number, decimal: true },
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

export const updateRoomOverallQuality = new ValidatedMethod({
  name: 'Rooms.methods.updateOverallQuality',
  validate: new SimpleSchema({
    _id: { type: String },
    "overallQuality": { type: Number, decimal: true },
  }).validator(),
  run({ _id, overallQuality }) {
    Rooms.update(_id, {
      $set: { overallQuality: overallQuality }
    });
  }
});

export const findRoomsInBuilding = (facilityId) => {
  return Rooms.find({ facilityId, }).fethc();
}

export const findRoomByNumber = (roomNumber) => {
  return Rooms.find({
    roomNumber: {
      $regex: roomNumber,
      $options: 'i',
    },
  }).fetch();
}

export const findRoomById = (_id) => {
  return Rooms.findOne({ _id, });
}
