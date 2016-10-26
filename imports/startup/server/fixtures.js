import { Meteor } from 'meteor/meteor';
import { Buildings } from '../../api/buildings/buildings.js';
import { insertBuilding } from '../../api/buildings/methods.js';

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
        }
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
      },
    ];

    buildings.forEach((building) => {
      insertBuilding.call(building, (error) => {
        if (error) {
          console.log("There was an error inserting mock building data");
        }
      });
    });
  }
});
