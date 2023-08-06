import { currentTravelerTrips } from "./scripts";

export const fetchUserBookings = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`).then((response) =>
    response.json()
  );
};

export const fetchAll = [
  fetchUserBookings("travelers"),
  fetchUserBookings("trips"),
  fetchUserBookings("destinations"),
];

export const fetchUserTrips = (trips) => {
  return fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify({
      id: id,
      userID: userID,
      travelers: travelers,
      date: "YYYY/MM/DD",
      duration: duration,
      status: "approved" || "pending",
      suggestedActivities: suggestedActivities,
    }),
    headers: { "Content-Type": "application/json" },
  });
};
