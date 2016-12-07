import { Mongo } from 'meteor/mongo';
import {
  addRoom,
  removeRoom,
  updateRoomAverages,
  findRoomById,
  findRoomByNumber,
  findRoomsInBuilding,
} from './methods.js';

const Rooms = new Mongo.Collection("rooms");

export {
  addRoom,
  removeRoom,
  updateRoomAverages,
  findRoomById,
  findRoomByNumber,
  findRoomsInBuilding,
};

export default Rooms;
