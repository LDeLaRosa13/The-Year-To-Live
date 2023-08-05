// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { buildCards, cardContainer, displayUserTrips, tripButton, pastTripButton, upcomingTripButton, pendingTripButton } from './domManipulation';
import { fetchUserBookings, fetchAll } from './travelAPIcalls';
import { getUserTrips } from './travelData';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/neon-hallway.png'

// global variable for tests
var currentTraveler = {
  id: 2,
  name: "Rachael Vaughten",
  travelerType: "thrill-seeker"
}
export let currentTravelerTrips;

export const userData = {
  user: null,
  travelers: [],
  trips: [],
  destinations: [],
  pendingTrips: function  () {
    // consolidate trip info
    // filter trips by status = pending
   
  }
}

// Event Listeners
window.addEventListener('load', () => {
  Promise.all(fetchAll) 
 .then(data => {
  userData.travelers = data[0].travelers,
  userData.trips = data[1].trips,
  userData.destinations = data[2].destinations,
  currentTravelerTrips = getUserTrips(currentTraveler.id, userData.trips)
  displayUserTrips();
 })
})


pastTripButton.addEventListener('click', () => {
  displayUserTrips()
})
upcomingTripButton.addEventListener('click', () => {
  displayUserTrips()
})
pendingTripButton.addEventListener('click', () => {
  displayUserTrips()
})







// fetchUserBookings(5).then((data) => {
//   console.log(data);
// });


// const renderPage = () => {
//   fetchUserBookings(id)
// };