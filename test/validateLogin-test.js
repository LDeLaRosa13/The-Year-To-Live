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

it('should gather a valid id', () => {
  let id = 1
  const validLogin = validateLogin(`traveler${id}`, 'travel' )
  expect(validLogin).to.equal(1)
})

it('should return false', () => {
  const nonValidLogin = validateLogin('traveler99', 'travel')
  expect(nonValidLogin).to.equal(false)
})
it('should return an error message if parameters are not met', () => {
  const loginResponse = validateLogin('name');
  expect(loginResponse).to.equal("Missing Login Information!")
})
