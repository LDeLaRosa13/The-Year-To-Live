import { travelAgentFeePercentage } from "./scripts";
import { estimatedTotalCost } from "./domManipulation";

export const getUserTrips = (userId, allTrips) => {
  console.log("allTrips", allTrips);
  let userTrips = allTrips.filter((trip) => trip.userID === userId);
  return userTrips;
};

export const buildCards = (userTrips, destinations) => {
  console.log("userTrips", userTrips);
  const currentDate = new Date();
  const totalTripInfo = userTrips.map((trip) => {
    let currentDestination = destinations.find(
      (destination) => destination.id === trip.destinationID
    );
    let startDate = new Date(trip.date);
    let endDate = new Date(
      startDate.getTime() + trip.duration * 24 * 60 * 60 * 1000
    );
    return {
      name: currentDestination.destination,
      image: currentDestination.image,
      travelers: trip.travelers,
      dates: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
      isCurrentTrip: startDate <= currentDate && currentDate <= endDate,
    };
  });

  const pastTrips = totalTripInfo.filter((trip) => {
    return !trip.isCurrentTrip && trip.status !== "approved";
  });

  const upcomingTrips = totalTripInfo.filter((trip) => {
    return trip.isCurrentTrip && trip.status === "approved";
  });
  return { pastTrips, upcomingTrips };
};

export const calculateTripCost = (userTripsObj, destinations, year) => {
  console.log("userTrips", userTripsObj);
  const userTrips = userTripsObj.filter((trip) => {
    const tripYear = new Date(trip.date).getFullYear();
    return tripYear === year;
  });

  let costOfAllTrips = 0;

  userTrips.forEach((trip) => {
    const desID = trip.destinationID;
    const duration = trip.duration;

    destinations.forEach((location) => {
      if (desID === location.id) {
        const costPerDay = location.estimatedLodgingCostPerDay;
        const flightCost = location.estimatedFlightCostPerPerson;
        const travelCost = costPerDay * duration;
        const cost = travelCost + flightCost;
        costOfAllTrips += cost;
      }
    });
  });

  const travelAgentFee = costOfAllTrips * travelAgentFeePercentage;
  costOfAllTrips += travelAgentFee;
  console.log("monay", costOfAllTrips);
  return costOfAllTrips;
};

export const estimatedCost = (duration, travelers, destination) => {
  if (duration && travelers && destination) {
    return `$${
      ((destination.estimatedLodgingCostPerDay * duration +
        destination.estimatedFlightCostPerPerson * travelers) *
      travelAgentFeePercentage).toFixed(2)
    }`;
  } else {
    return "Estimated Total Cost: Please fill out all of the information!";
  }
};
