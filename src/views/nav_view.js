const PubSub = require('../helpers/pub_sub.js');

const NavView = function (element) {
  this.element = element;
}

NavView.prototype.bindEvent = function () {
  // listen for clicked item
  this.element.addEventListener('click', (event) => {
    // select id from clicked item and then publish that id
    const clickedPlanet = event.target.id;
    PubSub.publish('NavView:selected-planet', clickedPlanet);
  })

};
module.exports = NavView;
