import { findBuildingByNumber, } from '../../api/buildings';
import { findRoomByName, } from '../../api/rooms';

const learned = findBuildingByNumber(88)._id;
const leep = findBuildingByNumber(228)._id;
const roomId = findRoomByName('G415')[0]._id;

export default reviews = [
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
    comments: 'LEEP2 is a pretty awesome building. It is the most recent building and it is packed! with tech. However, the tech do fail sometimes and class time is wasted because of it.'
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
    comments: 'We need a better cafe in here with foooooood.'
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
    comments: 'Hello, is it me you\'re looking foooooor.'
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
    comments: 'Learned is a pretty awesome building. It is the most recent building and it is packed! with tech. However, the tech do fail sometimes and class time is wasted because of it.'
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
    comments: 'We need a better cafe in here with foooooood.'
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
