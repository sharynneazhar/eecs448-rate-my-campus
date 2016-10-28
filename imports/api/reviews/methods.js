import { Reviews } from './reviews';

RatingsSchema = new SimpleSchema({

});

export const addReview = new ValidatedMethod({
  name: 'Reviews.methods.insert',
  validate: new SimpleSchema({
    facility: { type: String },
    dateReviewed: { type: Date },
    ratings: { type: RatingsSchema },
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
