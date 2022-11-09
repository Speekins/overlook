// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import { fetchData, cool } from './apiCalls'


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let allCustomersURL = 'http://localhost:3001/api/v1/customers'
let allCustomers
let allBookings = 'http://localhost:3001/api/v1/bookings'
let allRooms = 'http://localhost:3001/api/v1/rooms'

addEventListener('load', () => {
  fetchData(allCustomersURL)
  .then(data => allCustomers = data.customers)
  .then(() => console.log(allCustomers))
})