import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
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
    "name": { type: String, optional: true },
    "description": { type: String, optional: true },
    "address": { type: Object, optional: true },
    "address.full": { type: String, optional: true },
    "address.street": { type: String, optional: true },
    "address.city": { type: String, optional: true },
    "address.state": { type: String, optional: true },
    "address.zip": { type: String, optional: true },
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
