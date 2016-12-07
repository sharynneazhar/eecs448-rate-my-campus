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
    overallQuality: { type: Number, decimal: true },
    averageRatings: { type: Object, blackbox: true },
  }).validator(),
  run(building) {
    Buildings.insert(building);
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

export const updateBuildingAverages = new ValidatedMethod({
  name: 'Buildings.methods.updateBuildingAverages',
  validate: new SimpleSchema({
    _id: { type: String },
    "overallQuality": { type: Number, decimal: true },
    "averageRatings": { type: Object, blackbox: true },
  }).validator(),
  run({ _id, overallQuality, averageRatings }) {
    Buildings.update(_id, {
      $set: {
        overallQuality: overallQuality,
        averageRatings: averageRatings
      }
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
