


export const getUserTrips = (userId, allTrips) => {
  // console.log('what', allTrips)
  // console.log('banjo', userId)
  let userTrips = allTrips.filter((trip) => trip.userID === userId)
console.log('weeeha', userTrips)
return userTrips
}
// output is  = currentTravelerTrips