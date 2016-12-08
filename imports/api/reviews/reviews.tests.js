/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import Reviews, { addReview, removeReview, } from '../reviews';
import Buildings, { addBuilding, } from '../buildings';
import buildings from '../../resources/data/buildings.js';

if (Meteor.isServer) {
  describe('Reviews', () => {
    before(() => {
      addBuilding.call(buildings[0]);
    });

    after(() => {
      Buildings.remove({});
    });

    describe('Adding a review', () => {
      it('can add a valid review', () => {
        const buildingId = Buildings.findOne()._id;
        const size = Reviews.find().count();
        addReview.call({
          type: 'building',
          facilityId: buildingId,
          dateReviewed: new Date(),
          ratings: {
            internet: 4.2,
            studyAreas: 4.0,
            parking: 2.1,
            dining: 1.3,
            restrooms: 3.8,
            trashMaintenance: 2.8,
            vendingMachines: 2.5,
            accessibility: 3.0
          },
          comments: 'Test Review'
        });
        assert.equal(Reviews.find().count(), size + 1);
      });

      it('fails to add an empty review', () => {
        assert.throws(() => {
          addReview.call({})
        }, Meteor.Error);
      });

      it('fails to add an invalid review', () => {
        assert.throws(() => {
          addReview.call({
            type: 'room',
            name: '1420',
          },)
        }, Meteor.Error);
      });
    });

    describe('Removing a review', () => {
      it ('can remove with an existing review', () => {
        const size = Reviews.find().count();
        removeReview.call({ _id: Reviews.findOne()._id });
        assert.equal(Reviews.find().count(), size - 1);
      });

      it ('fails to remove with an non-existing review', () => {
        assert.throws(() => {
          removeReview.call({});
        }, Meteor.Error);
      });
    });

  });
}
