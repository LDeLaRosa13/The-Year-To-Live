// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { cardContainer, displayUserTrips, createCardElement, displayTripCost } from './domManipulation';
import { fetchUserBookings, fetchAll } from './travelAPIcalls';
import { getUserTrips, buildCards, calculateTripCost } from './travelData';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/neon-hallway.png'

export const pastTripsButton = document.getElementById("past");
export const upcomingTripsButton = document.getElementById("upcoming");
export const pendingTripsButton = document.getElementById("pending");
export const tripCostContainer = document.getElementById("tripCostContainer")

// global variable for tests
var currentTraveler = {
  id: 34,
  name: "Rachael Vaughten",
  travelerType: "thrill-seeker"
}
export let currentTravelerTrips;
export let tripCost;
export const travelAgentFeePercentage = 0.10;

export const userData = {
  user: null,
  travelers: [],
  trips: {
    all: [],
    past: [],
    pending: [],
    upcoming: []
  },
  destinations: []
}

// Event Listeners
window.addEventListener('load', () => {
  Promise.all(fetchAll) 
 .then(data => {
  userData.travelers = data[0].travelers,
  userData.trips = data[1].trips,
  userData.destinations = data[2].destinations,
  currentTravelerTrips = getUserTrips(currentTraveler.id, userData.trips)

  const currentYear = new Date().getFullYear(),
  tripCost = calculateTripCost(userData.trips, userData.destinations, currentYear)

  displayTripCost(tripCost);
  displayUserTrips();
 })
})


pastTripsButton.addEventListener('click', () => {
  pastTripsButton.classList.add("active")
  upcomingTripsButton.classList.remove("active")
  displayUserTrips()
})
upcomingTripsButton.addEventListener('click', () => {
  pastTripsButton.classList.remove("active")
  upcomingTripsButton.classList.add("active")
  displayUserTrips()
})
// pendingTripButton.addEventListener('click', () => {
//   displayUserTrips()
// })

