'use strict';

module.exports = {
  template: require('./gallery-partial.html'),
  controller: ['$log', 'galleryService', GalleryPartialController],
  controllerAs: 'galleryPartialCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryPartialController($log, galleryService){
  this.$onInit = () => {

    $log.debug('init galleryPartialCtrl');
    console.log(this.gallery, ' => this.gallery will be passed in as an element');
    $log.debug(this.gallery.created, ' <- galleryPartialCtrl.gallery.created');
    this.deleteGallery = function(){
      console.log(this.gallery, ' = this.gallery', this.gallery._id, ' = this.gallery._id');
      galleryService.deleteGallery(this.gallery._id);
    };
  };
}
