import { Mongo } from 'meteor/mongo';
import {
  addRoom,
  findRoomById,
  findRoomByNumber,
  findRoomsInBuilding,
  removeRoom,
  updateRoomOverallQuality,
} from './methods.js';

const Rooms = new Mongo.Collection("rooms");

export {
  addRoom,
  findRoomById,
  findRoomByNumber,
  findRoomsInBuilding,
  removeRoom,
  updateRoomOverallQuality,
};

export default Rooms;
