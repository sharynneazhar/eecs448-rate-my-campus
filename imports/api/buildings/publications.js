import { Meteor } from 'meteor/meteor';
import Buildings from '../buildings';

Meteor.publish('buildings', function() {
  return Buildings.find();
});
