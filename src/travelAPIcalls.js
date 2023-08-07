import { currentTravelerTrips } from "./scripts";

export const fetchUserBookings = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`).then((response) =>
    response.json()
  );
};

export const singleFetchRequest = (url) => {
  return fetch(url)
  .then(response => response.json())
}

export const fetchAll = [
  fetchUserBookings("travelers"),
  fetchUserBookings("trips"),
  fetchUserBookings("destinations"),
];

export const postUserTrips = (postObject) => {
  // const postObject = {
  //   id: id,
  //   userID: userID,
  //   destinationID: destinationID,
  //   travelers: travelers,
  //   date: date,
  //   duration: duration,
  //   status: status,
  //   suggestedActivities: suggestedActivities
  // }

  console.log("pls", postObject)

  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(
     postObject
    ),
    headers: { "Content-Type": "application/json" },
  });
}
