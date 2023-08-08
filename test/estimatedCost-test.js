import { expect } from 'chai';
import { sampleTrip } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestination } from '../src/destination-sample-data';
import { estimatedCost } from '../src/travelData';

describe('estimate trip cost', () => {

  it('should be a function', () => {
    expect(typeof estimatedCost).to.equal('function')
  })
})