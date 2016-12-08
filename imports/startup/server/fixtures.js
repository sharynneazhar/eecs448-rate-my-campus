import { Meteor } from 'meteor/meteor';
import Buildings, { addBuilding, findBuildingByName, } from '../../api/buildings';
import Rooms, { addRoom, } from '../../api/rooms';
import Reviews, { addReview } from '../../api/reviews';

import { buildings } from '../../resources/data/buildings.js';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Buildings.find().count() === 0) {
    buildings.forEach((building) => {
      addBuilding.call(building, (error) => {
        if (error) {
          console.log("There was an error inserting mock building data: ", error);
        }
      });
    });
  }

  const buildingId = findBuildingByName('LEEP')[0]._id;
  if (Rooms.find().count() === 0) {
    const rooms = [
      {
        type: 'room',
        name: 'G415',
        facilityId: buildingId,
        overallQuality: 4.0,
        averageRatings: {
          outlets: 4.0,
          technology: 4.0,
          seating: 4.0,
          desks: 4.0,
          lighting: 4.0,
          visibility: 4.0,
          audibility: 4.0,
          cleanliness: 4.0
        },
      },
      {
        type: 'room',
        name: '1420',
        facilityId: buildingId,
        overallQuality: 3.0,
        averageRatings: {
          outlets: 4.0,
          technology: 4.0,
          seating: 4.0,
          desks: 4.0,
          lighting: 4.0,
          visibility: 4.0,
          audibility: 4.0,
          cleanliness: 4.0
        },
      },
      {
        type: 'room',
        name: '1421',
        facilityId: buildingId,
        overallQuality: 3.0,
        averageRatings: {
          outlets: 4.0,
          technology: 4.0,
          seating: 4.0,
          desks: 4.0,
          lighting: 4.0,
          visibility: 4.0,
          audibility: 4.0,
          cleanliness: 4.0
        },
      },
      {
        type: 'room',
        name: '1422',
        facilityId: buildingId,
        overallQuality: 3.0,
        averageRatings: {
          outlets: 4.0,
          technology: 4.0,
          seating: 4.0,
          desks: 4.0,
          lighting: 4.0,
          visibility: 4.0,
          audibility: 4.0,
          cleanliness: 4.0
        },
      },
      {
        type: 'room',
        name: '1424',
        facilityId: buildingId,
        overallQuality: 3.0,
        averageRatings: {
          outlets: 4.0,
          technology: 4.0,
          seating: 4.0,
          desks: 4.0,
          lighting: 4.0,
          visibility: 4.0,
          audibility: 4.0,
          cleanliness: 4.0
        },
      }
    ];

    rooms.forEach((room) => {
      addRoom.call(room, (error) => {
        if (error) {
          console.log("There was an error inserting mock room data: ", error);
        }
      });
    });
  }

  const roomId = Rooms.findOne()._id;
  if (Reviews.find().count() === 0) {
    const reviews = [
      {
        type: 'building',
        facilityId: buildingId,
        dateReviewed: new Date(),
        ratings: {
          internet: 4.2,
          studyAreas: 4.0,
          parking: 2.1,
          dining: 1.3,
          restrooms: 3.8,
          trashMaintenance: 2.8,
          vendingMachines: 2.5,
          accessibility: 3.0
        },
        comments: 'LEEP2 is a pretty awesome building. It is the most recent building and it is packed! with tech. However, the tech do fail sometimes and class time is wasted because of it.'
      },
      {
        type: 'building',
        facilityId: buildingId,
        dateReviewed: new Date(),
        ratings: {
          internet: 4.8,
          studyAreas: 4.0,
          parking: 2.5,
          dining: 2.2,
          restrooms: 4.6,
          trashMaintenance: 3.2,
          vendingMachines: 2.5,
          accessibility: 3.0
        },
        comments: 'We need a better cafe in here with foooooood.'
      },
      {
        type: 'building',
        facilityId: buildingId,
        dateReviewed: new Date(),
        ratings: {
          internet: 4.8,
          studyAreas: 4.0,
          parking: 2.5,
          dining: 2.2,
          restrooms: 4.6,
          trashMaintenance: 3.2,
          vendingMachines: 2.5,
          accessibility: 3.0
        },
        comments: 'Hello, is it me you\'re looking foooooor.'
      },
      {
        type: 'room',
        facilityId: roomId,
        dateReviewed: new Date(),
        ratings: {
          outlets: 4.8,
          technology: 4.0,
          seating: 2.5,
          desks: 2.2,
          lighting: 4.6,
          visibility: 3.2,
          audibility: 2.5,
          cleanliness: 3.0
        },
        comments: 'Hello, this is dope.'
      },
    ];

    reviews.forEach((review) => {
      addReview.call(review, (error) => {
        if (error) {
          console.log("There was an error inserting mock review data: ", error);
        }
      });
    });
  }
});
