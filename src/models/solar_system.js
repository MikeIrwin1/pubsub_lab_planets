const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvent = function () {
  PubSub.subscribe('NavView:selected-planet', (event) => {
    const selectedPlanet = event.detail;
    this.publishPlanetDetail(selectedPlanet);
  });
};

SolarSystem.prototype.methodName = function () {

};
module.exports = SolarSystem;
