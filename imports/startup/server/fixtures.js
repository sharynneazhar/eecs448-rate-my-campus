import { Meteor } from 'meteor/meteor';
import Buildings, { addBuilding, } from '../../api/buildings';
import Rooms, { addRoom, } from '../../api/rooms';
import Reviews, { addReview } from '../../api/reviews';

// if the database is empty on server start, create some sample data.
Meteor.startup(() => {
  if (Buildings.find().count() === 0) {
    const buildings = [
      {
        name: 'Learned Engineering Expansion Phase 2 (LEEP2)',
        description: 'An extension of the Measurement, Materials & Sustainable Environment Center at the School of Engineering, LEEP2 was dedicated Oct. 30, 2015. It has three stories in 110,000 square feet and extends west and south to the area formerly occupied by Burt Hall.',
        address: {
          full: '1536 W. 15th St., Lawrence, KS 66045',
          street: '1536 W. 15th St.',
          city: 'Lawrence',
          state: 'KS',
          zip: '66045',
        },
        overallQuality: 4.0,
        averageRatings: {
          internet: 4.0,
          studyAreas: 4.0,
          parking: 4.0,
          dining: 4.0,
          restrooms: 4.0,
          trashMaintenance: 4.0,
          vendingMachines: 4.0,
          accessibility: 4.0
        },
      },
      {
        name: 'Learned Hall',
        description: 'Civil engineering was among the earliest courses taught at KU; electrical engineering was added in 1887, and in 1891 the School of Engineering was founded. Its first dean was Frank O. Marvin, son of third chancellor James Marvin. Departments of chemical, mechanical, mining and architectural engineering were added during his tenure, and in 1927 the school was renamed to Engineering and Architecture. In 1909, Marvin Hall was completed to house the School of Engineering.',
        address: {
          full: '1530 W. 15th St., Lawrence, KS 66045',
          street: '1530 W. 15th St.',
          city: 'Lawrence',
          state: 'KS',
          zip: '66045',
        },
        overallQuality: 4.0,
        averageRatings: {
          internet: 4.0,
          studyAreas: 4.0,
          parking: 4.0,
          dining: 4.0,
          restrooms: 4.0,
          trashMaintenance: 4.0,
          vendingMachines: 4.0,
          accessibility: 4.0
        },
      },
      {
        name: 'Malott Hall',
        description: 'Malott houses the departments of chemistry and of physics and astronomy and its observatory; the departments of medicinal chemistry and pharmacology and toxicology in the School of Pharmacy; the Molecular Structures Group of laboratories in mass spectrometry, nuclear magnetic resonance, protein structures and other specialties; administrative offices; faculty and staff offices; classrooms; specialty laboratories and research facilities; the Animal Care Unit; and support and supply services. A new School of Pharmacy building on west campus was completed in August 2010.',
        address: {
          full: '1251 Wescoe Hall Drive Lawrence, KS 66045',
          street: '1251 Wescoe Hall Drive',
          city: 'Lawrence',
          state: 'KS',
          zip: '66045',
        },
        overallQuality: 4.0,
        averageRatings: {
          internet: 4.0,
          studyAreas: 4.0,
          parking: 4.0,
          dining: 4.0,
          restrooms: 4.0,
          trashMaintenance: 4.0,
          vendingMachines: 4.0,
          accessibility: 4.0
        },
      },
    ];

    buildings.forEach((building) => {
      addBuilding.call(building, (error) => {
        if (error) {
          console.log("There was an error inserting mock building data: ", error);
        }
      });
    });
  }

  const buildingId = Buildings.findOne()._id;
  if (Rooms.find().count() === 0) {
    const rooms = [
      {
        roomNumber: 'G415',
        facilityId: buildingId,
        description: 'A pretty dank classroom.',
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
        roomNumber: '1420',
        facilityId: buildingId,
        description: 'A pretty small classroom.',
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
