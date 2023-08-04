export const getUserTrips = (userId, allTrips) => {
let userTrips = allTrips.trips.filter((trip) => trip.userID === userId)
return userTrips
}
// output is  = currentTravelerTrips