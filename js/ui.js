class UI {
  constructor() {
    this.location = document.querySelector('#w-location')
    this.desc = document.querySelector('#w-desc')
    this.string = document.querySelector('#w-string')
    this.details = document.querySelector('#w-details')
    this.icon = document.querySelector('#w-icon')
    this.humidity = document.querySelector('#w-humidity')
    this.minmax = document.querySelector('#w-minmax')
    this.wind = document.querySelector('#w-wind')
    this.sun = document.querySelector('#w-sun-rise-set')
  }

  paint(weather) {
    let dRise = new Date(weather.sys.sunrise * 1000)
    let dSet = new Date(weather.sys.sunset * 1000)
    const sunrise = `${dRise.getHours()}:${dRise.getMinutes()} Uhr`
    const sunset = `${dSet.getHours()}:${dSet.getMinutes()} Uhr`


    this.location.textContent = `${weather.name}, ${weather.sys.country}`
    this.desc.textContent = weather.weather[0].description
    this.string.textContent = `${Math.round(weather.main.temp)} °C`
    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.humidity.innerHTML = `<i class="fas fa-tint"></i> ${weather.main.humidity}%`
    this.minmax.innerHTML = `<i class="fas fa-temperature-low"></i> ${Math.round(weather.main.temp_min)} °C / <i class="fas fa-temperature-high"></i> ${Math.round(weather.main.temp_max)} °C`
    this.wind.innerHTML = `<i class="fas fa-wind"></i> ${weather.wind.speed} km/h`
    this.sun.innerHTML = `<i class="fas fa-sun"></i> <i class="fas fa-arrow-up"></i>${sunrise} / <i class="fas fa-arrow-down"></i>${sunset}`
  }
}
