import { expect } from 'chai';
import { sampleTrip } from './trips-sample-data';
import { sampleTravelers } from './travelers-sample-data';
import { sampleDestination } from './destination-sample-data';
import { validateLogin } from './travelData';




describe('validate login information', () => {

  it('should be a function', () => {
    expect(typeOf, validateLogin).to.equal('function')
  })
})