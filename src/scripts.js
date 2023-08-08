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
  displayVacation,
  vacationCard, 
  loginButton,
  hideMain,
  loginPage
} from "./domManipulation";
import { fetchUserBookings, fetchAll, fetchUserTrips, postUserTrips, singleFetchRequest } from "./travelAPIcalls";
import {
  getUserTrips,
  calculateTripCost,
  estimatedCost,
  validateLogin,
} from "./travelData";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/neon-hallway.png";

export const pastTripsButton = document.getElementById("past");
export const upcomingTripsButton = document.getElementById("upcoming");
export const pendingTripsButton = document.getElementById("pending");
export const tripCostContainer = document.getElementById("tripCostContainer");
export const destinationDrop = document.getElementById("destination");
export const tripDuration = document.getElementById("duration");
export const potentialTravelers = document.getElementById("travelers");
export const startDate = document.getElementById("start-date");
export const submitButton = document.getElementById("submit-btn");
export const userName = document.getElementById("username");
export const loginPassword = document.getElementById("password");


//Global Variables
export let currentTravelerTrips;
export let tripCost;
export let potentialVacation = {};

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
    return (destinationDrop.innerHTML += `
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

pendingTripsButton.addEventListener('click', () => {
  pastTripsButton.classList.remove("active");
  upcomingTripsButton.classList.remove("active");
  pendingTripsButton.classList.add("active");
  displayUserTrips()
})

destinationDrop.addEventListener("change", () => {
  estimatedTotalCost.innerHTML = `${estimatedCost(
    tripDuration.value,
    Number(potentialTravelers.value),
    userData.destinations.find((place) => {
      return place.destination === destinationDrop.value;
    })
  )}`;
});

tripDuration.addEventListener("change", () => {
  estimatedTotalCost.innerHTML = `${estimatedCost(
    tripDuration.value,
    Number(potentialTravelers.value),
    userData.destinations.find((place) => {
      return place.destination === destinationDrop.value;
    })
  )}`;
});

potentialTravelers.addEventListener("change", () => {
  estimatedTotalCost.innerHTML = `${estimatedCost(
    tripDuration.value,
    Number(potentialTravelers.value),
    userData.destinations.find((place) => {
      return place.destination === destinationDrop.value;
    })
  )}`;
});

submitButton.addEventListener('click', () => {
  const locationID = userData.destinations.find((destination) => {
    return destinationDrop.value === destination.destination
  })
  displayVacation(locationID,  parseInt(potentialTravelers.value), (startDate.value).replaceAll("-", "/"), parseInt(tripDuration.value) )


  potentialVacation = {
    id: Date.now(),
    userID: userData.user.id,
    destinationID: locationID.id,
    travelers: parseInt(potentialTravelers.value),
    date: (startDate.value).replaceAll("-", "/"),
    duration: parseInt(tripDuration.value),
    status: 'pending',
    suggestedActivities: []
  }

  vacationCard.classList.remove("hidden")
})


vacationCard.addEventListener('click', (e) => {
  let target = e.target
  if (target.tagName === "BUTTON") {
    postUserTrips(potentialVacation).then(() => {
      singleFetchRequest("http://localhost:3001/api/v1/trips")
      .then(data => {
        userData.trips = data.trips;
        currentTravelerTrips = getUserTrips(userData.user.id, userData.trips);
        displayUserTrips()
      })
      vacationCard.classList.add("hidden")
    })
  }
 

})


function renderApp() {
  Promise.all(fetchAll)
    .then((data) => {
      userData.travelers = data[0].travelers;
      userData.trips = data[1].trips;
      userData.destinations = data[2].destinations;
      currentTravelerTrips = getUserTrips(userData.user.id, userData.trips);
      

      const currentYear = new Date().getFullYear();
      tripCost = calculateTripCost(
        userData.trips,
        userData.destinations,
        currentYear
      );
      
      displayTripCost(tripCost);
      displayUserTrips();
      setDestinationDropDown(userData.destinations);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

loginButton.addEventListener('click', () => {
  let loginName = userName.value
  let password = loginPassword.value
  if (!validateLogin(loginName, password)) {
    return 
  } else {
    hideMain.classList.remove("hidden")
    loginPage.classList.add("hidden")
    renderApp()
  }
})
