import { fetchUserBookings } from './travelAPIcalls';

const tripPage = document.querySelector('.trip-page');
const loginButton = document.querySelector('.submit-btn');

const buildCards = (trips) => {
  // iterate over trips and return trip cards (trips.map?)
  // use QS to inject cards where i cut the code from
  // scripts js on page load 
  `<div class="card">
  <section class="trip-destination">${trips.destination.destination}</section>
  <section class="trip-dates">${trips.date}</section>
</div>`
}
