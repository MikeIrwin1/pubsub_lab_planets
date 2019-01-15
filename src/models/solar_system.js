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

SolarSystem.prototype.publishPlanetDetail = function (selectedPlanet) {
  let planetDetail;
  this.planets.forEach((element) => {
    if (element.name === selectedPlanet){
      planetDetail = element;
    }
  })
  PubSub.publish('SolarSystem:selected-planet-ready', planetDetail);
};
module.exports = SolarSystem;
