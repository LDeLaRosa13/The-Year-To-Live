import { fetchUserBookings } from './travelAPIcalls';
import { currentTravelerTrips, userData } from './scripts';
import { getUserTrips } from './travelData';

// const tripPage = document.querySelector('.trip-page');
// const loginButton = document.querySelector('.submit-btn');
export const cardContainer = document.querySelector('.card-container');

export const buildCards = (userTrips, destinations) => {
  console.log('yeet', userTrips)
  const currentDate = new Date()
  const totalTripInfo = userTrips.map((trip) => {
    let currentDestination = destinations.find(destination => destination.id === trip.destinationID)
    let startDate = new Date(trip.date)
    let endDate = new Date(startDate.getTime() + trip.duration * 24 * 60 * 60 * 1000)
    return {
      name: currentDestination.destination,
      image: currentDestination.image,
      travelers: trip.travelers,
      dates: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
      isCurrentTrip: startDate <= currentDate && currentDate <= endDate
    }
  })
  console.log('TRIPS', totalTripInfo)
    return totalTripInfo
  }


export const displayUserTrips = () => {
  const userTrips = currentTravelerTrips;
  const destinations = userData.destinations;
  const tripCards = buildCards(userTrips, destinations);

  cardContainer.innerHTML = '';

  tripCards.forEach((trip) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardHTML = `<section class="trip-destination">${trip.name}</section>
    // <section class="trip-dates">${trip.dates}</section>`

    card.innerHTML = cardHTML;

    cardContainer.appendChild(card)

  })
}
