const PubSub = require('../helpers/pub_sub.js');

const NavView = function (container) {
  this.container = container;
}

NavView.prototype.bindEvent = function () {
  // listen for clicked item
  this.container.addEventListener('click', (event) => {
    // select id from clicked item and then publish that id
    const clickedPlanet = event.target.id;
    PubSub.publish('NavView:selected-planet', clickedPlanet);
  })

};
module.exports = NavView;
