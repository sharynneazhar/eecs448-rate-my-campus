import { Mongo } from 'meteor/mongo';
import {
  addRoom,
  removeRoom,
  updateRoomAverages,
  findRoomById,
  findRoomByName,
  findRoomsInBuilding,
} from './methods.js';

const Rooms = new Mongo.Collection("rooms");

export {
  addRoom,
  removeRoom,
  updateRoomAverages,
  findRoomById,
  findRoomByName,
  findRoomsInBuilding,
};

export default Rooms;
