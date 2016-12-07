import { Mongo } from 'meteor/mongo';
import {
  addBuilding,
  removeBuilding,
  updateBuildingAverages,
  findBuildingByName,
  findBuildingById,
} from './methods.js';

const Buildings = new Mongo.Collection("buildings");

export {
  addBuilding,
  removeBuilding,
  updateBuildingAverages,
  findBuildingByName,
  findBuildingById,
};

export default Buildings;
