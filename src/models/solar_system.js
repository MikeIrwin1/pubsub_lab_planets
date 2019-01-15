const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvent = function () {
  PubSub.subscribe('NavView:selected-planet', (event) => {
    debugger;
    const selectedPlanet = event.detail;
    this.publishPlanetDetail(selectedPlanet);
  });
};

SolarSystem.prototype.publishPlanetDetail = function (selectedPlanet) {
  this.planets.forEach((element) => {
    if (element.name === selectedPlanet){
      return element;
    }
  })
  PubSub.publish('SolarSystem:selected-planet-ready', element);
};
module.exports = SolarSystem;
