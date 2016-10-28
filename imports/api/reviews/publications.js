import { Meteor } from 'meteor/meteor';
import { Reviews } from './reviews';

Meteor.publish('reviews', function() {
  return Reviews.find();
});
