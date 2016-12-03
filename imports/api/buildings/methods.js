import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Buildings from '../buildings';

export const addBuilding = new ValidatedMethod({
  name: 'Buildings.methods.insert',
  validate: new SimpleSchema({
    name: { type: String },
    description: { type: String },
    address: { type: Object },
    "address.full": { type: String },
    "address.street": { type: String },
    "address.city": { type: String },
    "address.state": { type: String },
    "address.zip": { type: String },
    "overallQuality": { type: Number, decimal: true },
  }).validator(),
  run(building) {
    Buildings.insert(building);
  }
});

export const updateBuilding = new ValidatedMethod({
  name: 'Buildings.methods.update',
  validate: new SimpleSchema({
    _id: { type: String },
    "name": { type: String, optional: true },
    "description": { type: String, optional: true },
    "address": { type: Object, optional: true },
    "address.full": { type: String, optional: true },
    "address.street": { type: String, optional: true },
    "address.city": { type: String, optional: true },
    "address.state": { type: String, optional: true },
    "address.zip": { type: String, optional: true },
    "overallQuality": { type: Number, optional: true, decimal: true },
  }).validator(),
  run(_id) {
    // Buildings.update(_id);
  }
});

export const removeBuilding = new ValidatedMethod({
  name: 'Buildings.methods.remove',
  validate: new SimpleSchema({
    _id: { type: String }
  }).validator(),
  run({ _id }) {
    Buildings.remove(_id);
  }
});

export const updateOverallQuality = new ValidatedMethod({
  name: 'Buildings.methods.updateOverallQuality',
  validate: new SimpleSchema({
    _id: { type: String },
    "overallQuality": { type: Number, decimal: true },
  }).validator(),
  run({ _id, overallQuality }) {
    Buildings.update(_id, {
      $set: { overallQuality: overallQuality }
    });
  }
});

export const findBuildingByName = (name) => {
  return Buildings.find({
    name: {
      $regex: name,
      $options: 'i',
    },
  }).fetch();
}

export const findBuildingById = (_id) => {
  return Buildings.findOne({ _id, });
}
