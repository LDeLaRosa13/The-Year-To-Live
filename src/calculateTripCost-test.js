import { expect } from 'chai';
import { sampleTrip } from './trips-sample-data';
import { sampleTravelers } from './travelers-sample-data';
import { sampleDestination } from './destination-sample-data';
import { calculateTripCost } from './travelData';

describe('calculate trip cost', () => {

  it('should be a function', () => {
    expect(typeOf, calculateTripCost).to.equal('function')
  })
})