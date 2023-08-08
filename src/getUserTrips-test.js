import { expect } from 'chai';
import { sampleTrip } from './trips-sample-data';
import { sampleTravelers } from './travelers-sample-data';
import { sampleDestination } from './destination-sample-data';
import { getUserTrips } from './travelData';

describe('collect users trips', () => {

  it('should be a function', () => {
    expect(typeOf, getUserTrips).to.equal('function')
  })
})
