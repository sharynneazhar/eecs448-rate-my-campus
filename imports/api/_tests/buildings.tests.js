/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import { Buildings } from '../buildings/buildings.js';
import { addBuilding } from '../buildings/methods.js';

const building = {
  name: 'Learned Engineering Expansion Phase 2 (LEEP2)',
  description: 'An extension of the Measurement, Materials & Sustainable Environment Center at the School of Engineering, LEEP2 was dedicated Oct. 30, 2015. It has three stories in 110,000 square feet and extends west and south to the area formerly occupied by Burt Hall.',
  address: {
    full: '1536 W. 15th St., Lawrence, KS 66045',
    street: '1536 W. 15th St.',
    city: 'Lawrence',
    state: 'KS',
    zip: '66045',
  }
};

if (Meteor.isServer) {
  describe('Buildings', () => {
    describe('Methods', () => {

      // make sure database is in the state we expect before running tests
      beforeEach(() => {
        Buildings.remove({});
        Buildings.insert({
          name: 'Building 1',
          description: 'Lorem Ipsum',
          address: {
            full: '1536 W. 15th St., Lawrence, KS 66045',
            street: '1536 W. 15th St.',
            city: 'Lawrence',
            state: 'KS',
            zip: '66045',
          }
        });
      });

      it('can add a new building', () => {
        addBuilding.call(building);
        assert.equal(Buildings.find().count(), 2);
      });

    });
  });
}
