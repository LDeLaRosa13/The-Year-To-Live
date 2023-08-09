import { expect } from 'chai';
import { sampleTrips } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestinations } from '../src/destination-sample-data';
import { calculateTripCost } from '../src/travelData';

describe('calculate trip cost', () => {

  it('should be a function', () => {
    expect(typeof calculateTripCost).to.equal('function')
  })
})

it("should calculate trip cost this year", () => {
const tripCost = calculateTripCost(sampleTrips, sampleDestinations, 2021)
expect(tripCost).to.equal(4095)
})

it('should return an error message if parameters are not met', () => {
  const calculateError = calculateTripCost('userTripsObj');
  expect(calculateError).to.equal("Missing Information!")
})