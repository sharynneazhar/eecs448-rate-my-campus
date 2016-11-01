import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Reviews } from './reviews';

export const addReview = new ValidatedMethod({
  name: 'Reviews.methods.insert',
  validate: new SimpleSchema({
    type: {
      type: String,
      allowedValues: ['building','room','others']
    },
    facility: { type: String },
    dateReviewed: { type: Date },
    ratings: {
      type: Object,
      blackbox: true
    },
    comments: { type: String }
  }).validator(),
  run(review) {
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
