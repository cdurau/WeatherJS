class Weather {
  // Sample URL: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7aa218de17e06690d7f26297b6d97f41
  constructor(city, country, units, lang) {
    this.appId = '7aa218de17e06690d7f26297b6d97f41';
    this.city = city;
    this.country = country;
    this.units = units;
    this.lang = lang;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=${this.units}&lang=${this.lang}&appid=${this.appId}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change Weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
