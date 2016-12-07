import { Mongo } from 'meteor/mongo';
import {
  addBuilding,
  findBuildingByName,
  findBuildingById,
  removeBuilding,
  updateBuilding,
  updateBuildingAverages,
} from './methods.js';

const Buildings = new Mongo.Collection("buildings");

export {
  addBuilding,
  findBuildingByName,
  findBuildingById,
  removeBuilding,
  updateBuilding,
  updateBuildingAverages,
};

export default Buildings;
