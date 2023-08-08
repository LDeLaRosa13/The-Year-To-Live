import { fetchUserBookings } from "./travelAPIcalls";
import { currentTravelerTrips, tripCostContainer, userData } from "./scripts";
import { buildCards, estimatedCost } from "./travelData";

export const welcomeMessage = document.querySelector('.welcome-msg');
export const loginButton = document.querySelector('.submit-btn');
export const cardContainer = document.querySelector(".card-container");
export const tripButton = document.querySelector(".trip-btn");
export const estimatedTotalCost = document.querySelector(".estimated-cost");
export const vacationCard = document.querySelector(".vacation-card");
export const hideMain = document.querySelector(".hide-main");
export const loginPage = document.querySelector(".login-page");


    
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
      const { pastTrips, upcomingTrips, pendingTrips } = buildCards(userTrips, destinations);
      
      cardContainer.innerHTML = "";

      let tripsToShow;
      if (document.getElementById("past").classList.contains("active")) {
        tripsToShow = pastTrips;
      } else if (document.getElementById("upcoming").classList.contains("active")) {
        tripsToShow = upcomingTrips;
      } else if (document.getElementById("pending").classList.contains("active")) {
        tripsToShow = pendingTrips;
      } else {
        return;
      }

      tripsToShow.forEach((trip) => {
        const card = createCardElement(trip);
        cardContainer.appendChild(card);

      });  
    }

    export const createVacationElement = (vacation) => {
    vacationCard.innerHTML = `<h2 class="trip-destination">${vacation.name}</h2>
      <img class="trip-img" src="${vacation.image}" alt="Trip Image>
       <p class="trip-dates">${vacation.dates}</p>
       <p class="vacation-info">${vacation.travelers}</p>
       <p class="vacation-cost">${vacation.cost}</p>
       <button id="vacationId">Book This Vacation!</button>`;
    
    }

    export const displayTripCost = (tripCost) => {
      tripCostContainer.innerHTML = `$${tripCost}`
    }
      
    export const displayVacation = (destination, travelers, dates, durationInput) => {
      const vacation = {
        name: destination.destination,
        cost: estimatedCost(durationInput, travelers, destination),
        travelers: travelers,
        dates: dates,
        image: destination.image
      }
      createVacationElement(vacation)
      
      }
    
    