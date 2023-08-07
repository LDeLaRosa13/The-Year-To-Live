// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.css";
import {
  cardContainer,
  displayUserTrips,
  createCardElement,
  displayTripCost,
  estimatedTotalCost,
} from "./domManipulation";
import { fetchUserBookings, fetchAll, fetchUserTrips, postUserTrips } from "./travelAPIcalls";
import {
  getUserTrips,
  buildCards,
  calculateTripCost,
  estimatedCost,
} from "./travelData";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/neon-hallway.png";

export const pastTripsButton = document.getElementById("past");
export const upcomingTripsButton = document.getElementById("upcoming");
export const pendingTripsButton = document.getElementById("pending");
export const tripCostContainer = document.getElementById("tripCostContainer");
export const destDrop = document.getElementById("destination");
export const tripDuration = document.getElementById("duration");
export const potentialTravelers = document.getElementById("travelers");
export const startDate = document.getElementById("start-date");
export const submitButton = document.getElementById("submit-btn");


//Global Variables
export let currentTravelerTrips;
export let tripCost;
export const travelAgentFeePercentage = 1.1;

export const userData = {
  user: {
    id: 34,
    name: "Rachael Vaughten",
    travelerType: "thrill-seeker",
  },
  travelers: [],
  trips: {
    all: [],
    past: [],
    pending: [],
    upcoming: [],
  },
  destinations: [],
};

// Event Listeners
window.addEventListener("load", () => {
  renderApp();
});

export const setDestinationDropDown = (dest) => {
  return dest.map((locale) => {
    return (destDrop.innerHTML += `
    <option value="${locale.destination}">${locale.destination}</option>`);
  });
};

pastTripsButton.addEventListener("click", () => {
  pastTripsButton.classList.add("active");
  upcomingTripsButton.classList.remove("active");
  displayUserTrips();
});
upcomingTripsButton.addEventListener("click", () => {
  pastTripsButton.classList.remove("active");
  upcomingTripsButton.classList.add("active");
  displayUserTrips();
});
// pendingTripButton.addEventListener('click', () => {
//   displayUserTrips()
// })

destDrop.addEventListener("change", () => {
  estimatedTotalCost.innerHTML = `${estimatedCost(
    duration.value,
    Number(travelers.value),
    userData.destinations.find((place) => {
      return place.destination === destination.value;
    })
  )}`;
});

tripDuration.addEventListener("change", () => {
  estimatedTotalCost.innerHTML = `${estimatedCost(
    duration.value,
    Number(travelers.value),
    userData.destinations.find((place) => {
      return place.destination === destination.value;
    })
  )}`;
});

potentialTravelers.addEventListener("change", () => {
  estimatedTotalCost.innerHTML = `${estimatedCost(
    duration.value,
    Number(travelers.value),
    userData.destinations.find((place) => {
      return place.destination === destination.value;
    })
  )}`;
});

submitButton.addEventListener('click', () => {
  postUserTrips(204, userData.user.id, destinationID, parseInt(travelers.value), (startDate.value).replaceAll("-", "/"), parseInt(tripDuration.value), 'pending', [])
  .then(response => console.log(response))
  .then(renderApp())
  
  
})
function renderApp() {
  Promise.all(fetchAll).then((data) => {
    (userData.travelers = data[0].travelers),
      (userData.trips = data[1].trips),
      (userData.destinations = data[2].destinations),
      (currentTravelerTrips = getUserTrips(userData.user.id, userData.trips));

    const currentYear = new Date().getFullYear(), tripCost = calculateTripCost(
      userData.trips,
      userData.destinations,
      currentYear
    );

    displayTripCost(tripCost);
    displayUserTrips();
    setDestinationDropDown(userData.destinations);
    console.log(data[2].destinations[4].id)
  });
}
