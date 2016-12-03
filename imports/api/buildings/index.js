import { Mongo } from 'meteor/mongo';
import {
  addBuilding,
  removeBuilding,
  updateBuilding,
  updateOverallQuality,
} from './methods.js';

const Buildings = new Mongo.Collection("buildings");

export {
  addBuilding,
  removeBuilding,
  updateBuilding,
  updateOverallQuality,
};

export default Buildings;
