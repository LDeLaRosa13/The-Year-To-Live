import { fetchUserBookings } from './travelAPIcalls';

const tripPage = document.querySelector('.trip-page');
const loginButton = document.querySelector('.submit-btn');


loginButton.addEventListener('click', console.log(''))

const renderPage = () => {
  console.log('Hello');
  let id = 5;
  fetchUserBookings(id)
};
