import { Mongo } from 'meteor/mongo';
import {
  addRoom,
  removeRoom,
  updateRoomOverallQuality,
} from './methods.js';

const Rooms = new Mongo.Collection("rooms");

export {
  addRoom,
  removeRoom,
  updateRoomOverallQuality,
};

export default Rooms;
  
