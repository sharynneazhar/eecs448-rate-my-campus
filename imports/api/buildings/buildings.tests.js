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
  findBuildingByNumber,
} from '../buildings';

import buildings from '../../resources/data/buildings.js';

if (Meteor.isServer) {
  describe('Buildings', () => {

    after(() => {
      Buildings.remove({});
    });

    describe('Adding a building', () => {
      it('can add a valid building', () => {
        const size = Buildings.find().count();
        addBuilding.call(buildings[0]);
        assert.equal(Buildings.find().count(), size + 1);
      });

      it('fails to add an empty building', () => {
        assert.throws(() => {
          addBuilding.call({})
        }, Meteor.Error);
      });

      it('fails to add an invalid building with missing information', () => {
        assert.throws(() => {
          addBuilding.call({
            type: 'building',
            name: 'Eaton Hall',
          },)
        }, Meteor.Error);
      });
    });

    describe('Finding a building', () => {
      it('can find a valid building by ID', () => {
        const validId = Buildings.findOne()._id;
        const building = findBuildingById(validId);
        assert.isDefined(building);
      });

      it('should fail to find an invalid building ID', () => {
        const building = findBuildingById('someInvalidId');
        assert.isUndefined(building);
      });

      it('can find a valid building by name', () => {
        const validName = Buildings.findOne().name;
        const building = findBuildingByName(validName);
        assert.isArray(building);
      });

      it('should fail to find an invalid building name', () => {
        const building = findBuildingByName('someInvalidName');
        assert.equal(building.length, 0);
      });

      it('can find a valid building by number', () => {
        const validNumber = Buildings.findOne().buildingNumber;
        const building = findBuildingByNumber(validNumber);
        assert.equal(building.buildingNumber, validNumber);
      });
    });

    describe('Removing a building', () => {
      it ('can remove with a valid building ID', () => {
        const size = Buildings.find().count();
        removeBuilding.call({ _id: Buildings.findOne()._id });
        assert.equal(Buildings.find().count(), size - 1);
      });

      it ('fails to remove with an invalid building ID', () => {
        assert.throws(() => {
          removeBuilding.call({});
        }, Meteor.Error);
      });
    });


  });
}
