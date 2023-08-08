import { expect } from 'chai';
import { sampleTrip } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestination } from '../src/destination-sample-data';
import { validateLogin } from '../src/travelData';




describe('validate login information', () => {

  it('should be a function', () => {
    expect(typeof validateLogin).to.equal('function')
  })
})