const fetchUserBookings = (id) => {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
  .then(response => response.json());
    }

export { fetchUserBookings };
