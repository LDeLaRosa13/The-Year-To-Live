


export const getUserTrips = (userId, allTrips) => {
  let userTrips = allTrips.filter((trip) => trip.userID === userId)
console.log('weeeha', userTrips)
return userTrips
}