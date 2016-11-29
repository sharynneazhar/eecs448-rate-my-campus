import { Meteor } from 'meteor/meteor';
import { Buildings } from '../../api/buildings/buildings.js';
import { Reviews } from '../../api/reviews/reviews.js';
import { addBuilding } from '../../api/buildings/methods.js';
import { addReview } from '../../api/reviews/methods.js';

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

  if (Reviews.find().count() === 0) {
    const buildingId = Buildings.findOne()._id;
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
