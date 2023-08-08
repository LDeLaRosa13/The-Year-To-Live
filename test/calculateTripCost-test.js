import { expect } from 'chai';
import { sampleTrip } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestination } from '../src/destination-sample-data';
import { calculateTripCost } from '../src/travelData';

describe('calculate trip cost', () => {

  it('should be a function', () => {
    expect(typeof calculateTripCost).to.equal('function')
  })
})