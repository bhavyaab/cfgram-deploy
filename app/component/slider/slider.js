'use strict';

module.exports = {
  template: require('./slider.html'),
  controller: ['$log', sliderController],
  controllerAs: 'sliderCtrl'
};

function sliderController($log){
  $log.debug('sliderController');

  this.heroImage = ['app/assets/img/arch.jpg',  'app/assets/img/walk.jpg',
    'app/assets/img/nature.jpg'];

  this.currentIndex = 0;

  this.setCurrentIndex = function(index){
    this.currentIndex = index;
  };

  this.isCurrentIndex = function(index){
    $log.debug(`isCurrentIndex = ${index}`);
    return this.currentIndex === index;
  };
}
