class Storage {
  constructor() {
    this.city;
    this.country;
    this.units;
    this.lang;
    this.defaultCity = 'Waltrop';
    this.defaultCountry = 'DE';
    this.defaultUnits = 'metric';
    this.defaultLang = 'DE';
  }

  getLocationData() {
    if (localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    if (localStorage.getItem('country') === null) {
      this.country = this.defaultCountry;
    } else {
      this.country = localStorage.getItem('country');
    }

    if (localStorage.getItem('units') === null) {
      this.units = this.defaultUnits;
    } else {
      this.units = localStorage.getItem('units');
    }

    if (localStorage.getItem('lang') === null) {
      this.lang = this.defaultLang;
    } else {
      this.lang = localStorage.getItem('lang');
    }

    return {
      city: this.city,
      country: this.country,
      units: this.units,
      lang: this.lang
    };
  }

  setLocationData(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
