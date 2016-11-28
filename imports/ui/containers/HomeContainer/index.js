import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Buildings } from '../../../api/buildings/buildings.js';
import { Reviews } from '../../../api/reviews/reviews.js';
import Home from '../../pages/home';

export default HomeContainer = createContainer(() => {
  const rHandle = Meteor.subscribe('reviews');
  const loading = !rHandle.ready();
  const reviews = Reviews.find({}, { sort: { DateTime: -1, limit: 10 }}).fetch();
  return {
    loading,
    reviews,
  }
}, Home);
