/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { MockBuildings } from './mockData.js';
import { Buildings } from '../buildings/buildings.js';
import {
  addBuilding,
  removeBuilding,
} from '../buildings/methods.js';

if (Meteor.isServer) {
  describe('Buildings', () => {
    describe('Methods', () => {

      // make sure database is in the state we expect before running tests
      beforeEach(() => {
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
        removeBuilding.call(buildingId);
        assert.equal(Buildings.find().count(), size - 1);
      });

    });
  });
}
