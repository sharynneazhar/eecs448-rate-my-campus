/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import Rooms, {
  addRoom,
  removeRoom,
  updateRoomAverages,
  findRoomById,
  findRoomByName,
  findRoomsInBuilding,
} from '../rooms';

import Buildings, { addBuilding, } from '../buildings';
import buildings from '../../resources/data/buildings.js';
import rooms from '../../resources/data/rooms.js';

if (Meteor.isServer) {
  describe('Rooms', () => {
    before(() => {
      addBuilding.call(buildings[0]);
    });

    after(() => {
      Buildings.remove({});
      Rooms.remove({});
    });

    describe('Adding a room', () => {
      it('can add a valid room', () => {
        const buildingId = Buildings.findOne()._id;
        const size = Rooms.find().count();
        addRoom.call(rooms[0]);
        assert.equal(Rooms.find().count(), size + 1);
      });

      it('fails to add an empty room', () => {
        assert.throws(() => {
          addRoom.call({})
        }, Meteor.Error);
      });

      it('fails to add an invalid room with missing information', () => {
        assert.throws(() => {
          addRoom.call({
            type: 'room',
            name: '1420',
          },)
        }, Meteor.Error);
      });
    });

    describe('Finding a room', () => {
      it('can find a valid room by ID', () => {
        const validId = Rooms.findOne()._id;
        const room = findRoomById(validId);
        assert.isDefined(room);
      });

      it('should fail to find an invalid room ID', () => {
        const room = findRoomById('someInvalidId');
        assert.isUndefined(room);
      });

      it('can find a valid room by name', () => {
        const validName = Rooms.findOne().name;
        const room = findRoomByName(validName);
        assert.isArray(room);
      });

      it('should fail to find an invalid room name', () => {
        const room = findRoomByName('someInvalidName');
        assert.equal(room.length, 0);
      });
    });

    describe('Removing a room', () => {
      it ('can remove with a valid room ID', () => {
        const size = Rooms.find().count();
        removeRoom.call({ _id: Rooms.findOne()._id });
        assert.equal(Rooms.find().count(), size - 1);
      });

      it ('fails to remove with an invalid room ID', () => {
        assert.throws(() => {
          removeRoom.call({});
        }, Meteor.Error);
      });
    });

  });
}
