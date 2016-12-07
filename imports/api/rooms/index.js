import { Mongo } from 'meteor/mongo';
import {
  addRoom,
  findRoomById,
  findRoomByNumber,
  findRoomsInBuilding,
  removeRoom,
  updateRoomAverages,
} from './methods.js';

const Rooms = new Mongo.Collection("rooms");

export {
  addRoom,
  findRoomById,
  findRoomByNumber,
  findRoomsInBuilding,
  removeRoom,
  updateRoomAverages,
};

export default Rooms;
