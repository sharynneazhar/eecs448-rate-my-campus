/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { MockBuildings } from './mockData.js';
import { Buildings } from '../buildings/buildings.js';
import {
  addBuilding,
  removeBuilding,
  updateBuilding,
} from '../buildings/methods.js';

if (Meteor.isServer) {
  describe('Buildings', () => {
    describe('Methods', () => {

      after(() => {
        Buildings.remove({});
      });

      it('can add a new building', () => {
        const size = MockBuildings.length;
        MockBuildings.forEach((building) => {
          addBuilding.call(building);
        });
        assert.equal(Buildings.find().count(), size);
      });

      it('can remove a building', () => {
        const size = MockBuildings.length;
        const buildingId = Buildings.findOne()._id;
        removeBuilding.call({ _id: buildingId });
        assert.equal(Buildings.find().count(), size - 1);
      });

      // it('can update a building', () => {
      //   const buildingId = Buildings.find().fetch()[0]._id;
      //   const oldData = Buildings.findOne(buildingId).description;
      //   updateBuilding.call(buildingId, { description: "updated description", });
      //   const newData = Buildings.findOne(buildingId).description;
      //   console.log(Buildings.findOne(buildingId));
      //   assert.notEqual(oldData, newData);
      // });
    });
  });
}
