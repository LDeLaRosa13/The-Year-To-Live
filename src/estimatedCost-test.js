import { expect } from 'chai';
import { sampleTrip } from './trips-sample-data';
import { sampleTravelers } from './travelers-sample-data';
import { sampleDestination } from './destination-sample-data';
import { estimatedCost } from './travelData';

describe('estimate trip cost', () => {

  it('should be a function', () => {
    expect(typeOf, estimatedCost).to.equal('function')
  })
})