import { fetchUserBookings } from './travelAPIcalls';
import { userData } from './scripts';

// const tripPage = document.querySelector('.trip-page');
// const loginButton = document.querySelector('.submit-btn');
export const cardContainer = document.querySelector('.card-container');

export const buildCards = (trips) => {
  getUserTrips.map((trip) => {
    
  })
  cardContainer.innerHTML += `<div class="card">
  <section class="trip-destination">${userData.destinations}</section>
  <section class="trip-dates">${currentTravelerTrips}</section>
  </div>`
}
// iterate over trips and return trip cards (trips.map?)
// use QS to inject cards where i cut the code from
// scripts js on page load 


export const displayUserTrips = () => {
// compare Travelers.id with trip.userid and Trip destinationid with Destination ID 

}
