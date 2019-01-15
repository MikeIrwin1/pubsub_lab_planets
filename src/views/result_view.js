const PubSub = require('../helpers/pub_sub.js')

const ResultView = function (container) {
  this.container = container;
}

ResultView.prototype.bindEvent = function () {
  PubSub.subscribe('SolarSystem:selected-planet-ready', (event) => {
    const planet = event.detail;
    this.render(planet);
  })
};

ResultView.prototype.render = function (planet) {
  const planetName = document.createElement('h3');
  const planetOrbit = document.createElement('p');
  const planetDay = document.createElement('p');
  const planetSurfaceArea = document.createElement('p');
  const planetVolume = document.createElement('p');
  const planetGravity = document.createElement('p');
  const planetMoons = document.createElement('p');

  planetName.textContent = `${planet.name}`;
  planetOrbit.textContent = `Orbit: ${planet.orbit} Earth days`;
  planetDay.textContent = `Day: ${planet.day} Earth days`;
  planetSurfaceArea.textContent = `Surface Area: ${planet.surfaceArea} Earths`;
  planetVolume.textContent = `Volume: ${planet.volume} Earths`;
  planetGravity.textContent = `Gravity: ${planet.gravity}g`;
  planetMoons.textContent = `Moons: ${planet.moons}`;

  this.container.innerHTML = '';
  this.container.appendChild(planetName);
  this.container.appendChild(planetOrbit);
  this.container.appendChild(planetDay);
  this.container.appendChild(planetSurfaceArea);
  this.container.appendChild(planetVolume);
  this.container.appendChild(planetGravity);
  this.container.appendChild(planetMoons);
};
module.exports = ResultView;
