import { Buildings } from './buildings';

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
  }).validator(),
  run(building) {
    Buildings.insert(building);
  }
});

export const updateBuilding = new ValidatedMethod({
  name: 'Buildings.methods.update',
  validate: new SimpleSchema({
    _id: { type: String },
    "update.name": { type: String, optional: true },
    "update.description": { type: String, optional: true },
    "update.address": { type: Object, optional: true },
    "update.address.full": { type: String, optional: true },
    "update.address.street": { type: String, optional: true },
    "update.address.city": { type: String, optional: true },
    "update.address.state": { type: String, optional: true },
    "update.address.zip": { type: String, optional: true },
  }).validator(),
  run({ _id, update }) {
    Buildings.update(_id, { $set: update });
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
