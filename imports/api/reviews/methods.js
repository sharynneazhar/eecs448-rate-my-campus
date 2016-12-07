import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Buildings, { updateBuildingAverages, } from '../buildings';
import Rooms, { updateRoomAverages, } from '../rooms';
import Reviews from '../reviews';

const getFacilityConfig = (type, _id) => {
  // find the facility according to type
  if (type === 'building') {
    return {
      facility: Buildings.findOne({ _id, }),
      updateMethod: updateBuildingAverages,
    };
  } else if (type === 'room') {
    return {
      facility: Rooms.findOne({ _id, }),
      updateMethod: updateRoomAverages,
    };
  }
  return null;
}

const updateAverages = (review) => {
  // find the facility according to type
  const {
    facility,
    updateMethod,
  } = getFacilityConfig(review.type, review.facilityId);

  const _id = facility._id;

  // calculate the overall of the newly submitted review
  const oldOverall = facility.overallQuality;
  const newOverall = Object.values(review.ratings).reduce((a, b) => {
    return (a + b) / 2;
  });

  // calculate the new overall quality
  const overallQuality = (oldOverall + newOverall) / 2;

  // get each rating of the newly submitted review
  const averageRatings = facility.averageRatings;

  // calculate the new average ratings
  Object.keys(averageRatings).map((key) => {
    averageRatings[key] = (averageRatings[key] + review.ratings[key]) / 2;
  });

  // update the new overall quality in the database
  updateMethod.call({ _id, overallQuality, averageRatings }, (error) => {
    if (error) {
      console.error(`There was an error updating ${review.type} averages`, error);
    }
  });
}

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
    updateAverages(review);
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
