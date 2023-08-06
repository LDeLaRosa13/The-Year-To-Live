import { fetchUserBookings } from "./travelAPIcalls";
import { currentTravelerTrips, tripCostContainer, userData } from "./scripts";
import { getUserTrips, buildCards } from "./travelData";

// const tripPage = document.querySelector('.trip-page');
// const loginButton = document.querySelector('.submit-btn');
export const cardContainer = document.querySelector(".card-container");
export const tripButton = document.querySelector(".trip-btn");


    
export const createCardElement = (trip) => {
  const card = document.createElement('div');
  card.classList.add('card');

const cardHTML = `<section class="trip-destination">${trip.name}</section>
  <img class="trip-img" src="${trip.image}" alt="Trip Image>
   <section class="trip-dates">${trip.dates}</section>`;

card.innerHTML = cardHTML;

return card;
}

    export const displayUserTrips = () => {
      const userTrips = currentTravelerTrips;
      const destinations = userData.destinations;
      const { pastTrips, upcomingTrips } = buildCards(userTrips, destinations);
      
      cardContainer.innerHTML = "";

       const tripsToShow = document.getElementById("past").classList.contains("active")
        ? pastTrips
        : upcomingTrips

      tripsToShow.forEach((trip) => {
        const card = createCardElement(trip);
        cardContainer.appendChild(card);

      });  
      console.log("tripsToShow", tripsToShow)
    }

    export const displayTripCost = (tripCost) => {
      tripCostContainer.innerHTML = `$${tripCost}`
    }
      