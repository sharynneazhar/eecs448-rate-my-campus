import { Meteor } from 'meteor/meteor';
import Buildings, { addBuilding, findBuildingByNumber, } from '../../api/buildings';
import Rooms, { addRoom, findRoomByName, } from '../../api/rooms';
import Reviews, { addReview } from '../../api/reviews';

import buildings from '../../resources/data/buildings.js';
import rooms from '../../resources/data/rooms.js';

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

  if (Rooms.find().count() === 0) {
    rooms.forEach((room) => {
      addRoom.call(room, (error) => {
        if (error) {
          console.log("There was an error inserting mock room data: ", error);
        }
      });
    });
  }

  const learned = findBuildingByNumber(88)._id;
  const leep = findBuildingByNumber(228)._id;
  const roomId = findRoomByName('G415')[0]._id;
  if (Reviews.find().count() === 0) {
    const reviews = [
      {
        type: 'building',
        facilityId: learned,
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
        comments: 'Learned is getting pretty old nowadays and a tad creepy. The table a pretty nice in some rooms, but in others they are those 2-for-1 table and chair deal.'
      },
      {
        type: 'building',
        facilityId: learned,
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
        comments: 'I really like how learned is attached to both LEEP and Eaton. It\'s a longer walk but no need to brace myself when WINTER IS COMING!'
      },
      {
        type: 'building',
        facilityId: learned,
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
        comments: 'In general, the building is pretty clean but the restrooms are creepy. It definitely shows its age.'
      },
      {
        type: 'building',
        facilityId: leep,
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
        comments: 'LEEP is a pretty awesome building. It is the most recent building and it is packed! with tech. However, the tech do fail sometimes and class time is wasted because of it.'
      },
      {
        type: 'building',
        facilityId: leep,
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
        comments: 'LEEP has a really nice lounge area with big glass windows. After all, we engineers probably need that sunlight. Wins over Tanschutz for sure.'
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
        comments: 'I really like the tech in here. Could use a bit of maintenance though.'
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
        comments: 'It\'s kind of hard to see the professor sometimes with all the TVs in the way.'
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
        comments: 'I love how this room (and basically all the rooms in this building) have all the cords for us to use!'
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
