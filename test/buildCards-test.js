import { expect } from 'chai';
import { sampleTrip } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestination } from '../src/destination-sample-data';
import { buildCards } from '../src/travelData';

describe('build trip cards', () => {

  it('should be a function', () => {
    expect(typeof buildCards).to.equal('function')
  })

  it('should return a trip card', () => {
    const tripCard = buildCards(sampleTrip, sampleDestination)
    expect(tripCard).to.deep.equal()
  })
})