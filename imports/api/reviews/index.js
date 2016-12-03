import { Mongo } from 'meteor/mongo';
import {
  addReview,
  removeReview,
} from './methods.js';

const Reviews = new Mongo.Collection("reviews");

export {
  addReview,
  removeReview,
};

export default Reviews;
