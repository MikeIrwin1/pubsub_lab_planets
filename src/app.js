const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const NavView = require ('./views/nav_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvent();
  console.log(planetsDataModel.planets);

  const selectElement = document.querySelector('.planets-menu');
  const navElements = new NavView(selectElement);
  navElements.bindEvent();

});
