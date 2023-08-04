const fetchUserBookings = (data) => {
  return fetch(`http://localhost:3001/api/v1/${data}`)
  .then(response => response.json());
  }

export const fetchAll =  [ 
  fetchUserBookings('travelers'),
  fetchUserBookings('trips'),
  fetchUserBookings('destinations')
];
