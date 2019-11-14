// Init Local Storage
const storage = new Storage();
// Get Stored Location Data
const weatherLocation = storage.getLocationData();

// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country, weatherLocation.units, weatherLocation.lang);

// Event Listeners
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location
document.querySelector('#w-change-btn').addEventListener('click', e => {
  const city = document.querySelector('#city').value;
  const country = document.querySelector('#country').value;

  // Change Location
  weather.changeLocation(city, country);

  // Save Location to Local Storage
  storage.setLocationData(city, country);

  // Get and display weather
  getWeather();

  // Close Modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
    .then(results => {
      const ui = new UI();
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
