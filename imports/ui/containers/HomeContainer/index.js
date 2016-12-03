import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Reviews } from '../../../api/reviews/reviews.js';
import Home from '../../pages/home';

export default HomeContainer = createContainer(() => {
  const subscription = Meteor.subscribe('reviews');
  const loading = !subscription.ready();
  const reviews = Reviews.find({}, { sort: { DateTime: -1, limit: 10 }}).fetch();
  return {
    loading,
    reviews,
  }
}, Home);
