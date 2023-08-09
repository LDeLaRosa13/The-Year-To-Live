import { expect } from 'chai';
import { sampleTrips } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestinations } from '../src/destination-sample-data';
import { estimatedCost } from '../src/travelData';

describe('estimate trip cost', () => {

  it('should be a function', () => {
    expect(typeof estimatedCost).to.equal('function')
  })
})

it("should estimate trip cost based on information passed in", () => {
  const estimatedPrice = estimatedCost(sampleTrips[0].duration, sampleTravelers.length, sampleDestinations[0])
  expect(estimatedPrice).to.equal('Estimated Total Cost: $2953.50')
})

it('should return an error message if parameters are not met', () => {
  const costError = estimatedCost('travelers');
  expect(costError).to.equal("Missing Information!")
})