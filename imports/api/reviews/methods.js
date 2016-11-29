import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Reviews } from './reviews';
import { Buildings } from '../buildings/buildings.js';
import { updateOverallQuality } from '../buildings/methods.js';

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
    const building = Buildings.findOne({ _id: review.facilityId, });
    const ratings = Object.values(review.ratings);
    const sum = ratings.reduce((a, b) => {
      return a + b;
    });
    const average = sum / ratings.length;
    const newAverage = (building.overallQuality + average) / 2;
    updateOverallQuality.call({
      _id: building._id,
      overallQuality: newAverage,
    }, (error) => {
      if (error) {
        console.log("There was an error updating building overall quality", error);
      }
    });
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
