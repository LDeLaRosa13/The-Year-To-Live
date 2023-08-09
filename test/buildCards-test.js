import { expect } from 'chai';
import { sampleTrips } from '../src/trips-sample-data';
import { sampleTravelers } from '../src/travelers-sample-data';
import { sampleDestinations } from '../src/destination-sample-data';
import { buildCards } from '../src/travelData';

describe('build trip cards', () => {

  it('should be a function', () => {
    expect(typeof buildCards).to.equal('function')
  })

  it('should return trips organized by dates', () => {
    const { pastTrips, upcomingTrips, pendingTrips } = buildCards(sampleTrips, sampleDestinations)
    expect(pastTrips.length).to.equal(2)
    expect(upcomingTrips.length).to.equal(1)
    expect(pendingTrips.length).to.equal(1)
    const tripCard = pastTrips[0]
    expect(tripCard).to.deep.equal({
      name: 'San Juan, Puerto Rico',
      image: 'https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80',
      travelers: 3,
      status: 'approved',
      dates: '1/9/2021 - 1/24/2021',
      isCurrentTrip: false,
      isUpcoming: false,
    })
  })
  it('should return an error message if parameters are not met', () => {
    const cardError = buildCards('trips');
    expect(cardError).to.equal("Missing Information!")
  })
})