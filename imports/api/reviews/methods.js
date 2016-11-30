import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Reviews } from './reviews';
import { Buildings } from '../buildings/buildings.js';
import { updateOverallQuality } from '../buildings/methods.js';
import { Rooms } from '../rooms/rooms.js';
import { updateRoomOverallQuality } from '../rooms/methods.js';

export const addReview = new ValidatedMethod({
  name: 'Reviews.methods.insert',
  validate: new SimpleSchema({
    type: {
      type: String,
      allowedValues: ['school', 'building','room','others']
    },
    facilityId: { type: String },
    dateReviewed: { type: Date },
    ratings: {
      type: Object,
      blackbox: true
    },
    comments: { type: String }
  }).validator(),
  run(review) {
    if (review.type === 'building') {
      const building = Buildings.findOne({ _id: review.facilityId, });
      const _id = building._id;
      let overallQuality = building.overallQuality;
      const average = Object.values(review.ratings).reduce((a, b) => {
        return (a + b) / 2;
      });
      overallQuality = (overallQuality + average) / 2;
      updateOverallQuality.call({ _id, overallQuality }, (error) => {
        if (error) {
          console.log("There was an error updating building overall quality", error);
        }
      });
    } else if (review.type === 'room') {
      const room = Rooms.findOne({ _id: review.facilityId, });
      const _id = room._id;
      let overallQuality = room.overallQuality;
      const average = Object.values(review.ratings).reduce((a, b) => {
        return (a + b) / 2;
      });
      overallQuality = (overallQuality + average) / 2;
      updateOverallQuality.call({ _id, overallQuality }, (error) => {
        if (error) {
          console.log("There was an error updating room overall quality", error);
        }
      });
    }
    Reviews.insert(review);
  }
});

export const removeReview = new ValidatedMethod({
  name: 'Reviews.methods.remove',
  validate: new SimpleSchema({
    _id: { type: String }
  }).validator(),
  run(_id) {
    Reviews.remove(_id);
  }
});
