// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import './domManipulation';
import { fetchUserBookings, fetchAll } from './travelAPIcalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/neon-hallway.png'



export const userData = {
  user: null,
  travelers: [],
  trips: [],
  destinations: []
}

// Event Listeners
window.addEventListener('load', () => {
  Promise.all(fetchAll) 
 .then(data => {
  userData.travelers = data[0],
  userData.trips = data[1],
  userData.destinations = data[2]
  console.log(data)
 })
})











// fetchUserBookings(5).then((data) => {
//   console.log(data);
// });


// const renderPage = () => {
//   fetchUserBookings(id)
// };