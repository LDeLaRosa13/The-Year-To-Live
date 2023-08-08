import { expect } from 'chai';
import { sampleTrips } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestinations } from '../src/destination-sample-data';
import { validateLogin } from '../src/travelData';


describe('validate login information', () => {

  it('should be a function', () => {
    expect(typeof validateLogin).to.equal('function')
  })
})

it('should validate login information', () => {
  const validLogin = validateLogin('traveler1', 'travel' )
  expect(validLogin).to.equal(true)
})

it('should return false', () => {
  const nonValidLogin = validateLogin('traveler99', 'travel')
  expect(nonValidLogin).to.equal(false)
})