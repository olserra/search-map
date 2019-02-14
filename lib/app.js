// TODO: Write your JS code in here

// Imports
import mapboxgl from 'mapbox-gl';


// Selecting
const input = document.querySelector('#search');
const form = document.querySelector("#form");


// Action on the button
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('.form-control');
  fetchMap(input.value);
});

// Insert the location
const insertMap = (data) => {

  mapboxgl.accessToken = 'pk.eyJ1Ijoib2xzZXJyYSIsImEiOiJjanM0aXdnNmswNTBmM3lybmJldXZxbXA5In0.fIQzHWDVGJyEc93RirzjpA';

  const result = data.features;
  const center = (result[0].geometry.coordinates);

  const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: center,
  zoom: 12
  });

  const maps = `<li><img src="${map}" alt="" /></li>`;
  maps.insertAdjacentHTML('beforeend', map);
};

// Get request on API
const fetchMap = (address) => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoib2xzZXJyYSIsImEiOiJjanM0aXdnNmswNTBmM3lybmJldXZxbXA5In0.fIQzHWDVGJyEc93RirzjpA
`)
  .then(response => response.json())
  .then(insertMap);
};
