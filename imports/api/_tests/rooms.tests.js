/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { MockRooms } from './mockData.js';
import Rooms, {
  addRoom,
  removeRoom,
  updateRoom,
} from '../rooms';

if (Meteor.isServer) {
  describe('Rooms', () => {
    describe('Methods', () => {

      after(() => {
        Rooms.remove({});
      });

      it('can add a new room', () => {
        const size = MockRooms.length;
        MockRooms.forEach((room) => {
          addRoom.call(room);
        });
        assert.equal(Rooms.find().count(), size);
      });

      it('can remove a room', () => {
        const size = MockRooms.length;
        const roomId = Rooms.findOne()._id;
        removeRoom.call({ _id: roomId });
        assert.equal(Rooms.find().count(), size - 1);
      });

      // it('can update a room', () => {
      //   const roomId = Rooms.find().fetch()[0]._id;
      //   const oldData = Rooms.findOne(roomId).description;
      //   updateRoom.call(roomId, { description: "updated description", });
      //   const newData = Rooms.findOne(roomId).description;
      //   console.log(Rooms.findOne(roomId));
      //   assert.notEqual(oldData, newData);
      // });
    });
  });
}
