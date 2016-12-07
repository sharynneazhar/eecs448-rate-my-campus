/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import Buildings, {
  addBuilding,
  removeBuilding,
  updateBuildingAverages,
  findBuildingByName,
  findBuildingById,
} from '../buildings';

const MockBuildings = [
  {
    type: 'building',
    name: 'Learned Engineering Expansion Phase 2 (LEEP2)',
    description: 'Engineeringg building',
    address: {
      full: '1536 W. 15th St., Lawrence, KS 66045',
      street: '1536 W. 15th St.',
      city: 'Lawrence',
      state: 'KS',
      zip: '66045',
    },
    overallQuality: 4.0,
    averageRatings: {
      internet: 4.0,
      studyAreas: 4.0,
      parking: 4.0,
      dining: 4.0,
      restrooms: 4.0,
      trashMaintenance: 4.0,
      vendingMachines: 4.0,
      accessibility: 4.0
    },
  },
];

if (Meteor.isServer) {
  describe('Buildings', () => {
    describe('Methods', () => {

      after(() => {
        Buildings.remove({});
      });

      it('can add a new building', () => {
        const size = MockBuildings.length;
        MockBuildings.map((building) => {
          addBuilding.call(building);
        });
        assert.equal(Buildings.find().count(), size);
      });

      it('can find a valid building by ID', () => {
        const randomId = Buildings.findOne()._id;
        const building = findBuildingById(randomId);
        assert.isDefined(building);
      });

      it('should fail to find an invalid building ID', () => {
        const randomId = 'someInvalidId'
        const building = findBuildingById(randomId);
        assert.isUndefined(building);
      });

      it('can find a valid building by name', () => {
        const randomName = Buildings.findOne().name;
        const building = findBuildingByName(randomName);
        assert.isArray(building);
      });

      it('should fail to find an invalid building name', () => {
        const randomName = 'someInvalidName'
        const building = findBuildingByName(randomName);
        assert.isArray(building);
      });

      it('can remove a building', () => {
        const size = MockBuildings.length;
        const buildingId = Buildings.findOne()._id;
        removeBuilding.call({ _id: buildingId });
        assert.equal(Buildings.find().count(), size - 1);
      });

    });
  });
}
