import SimpleLightBox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(SimpleLightBox);
let newGallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
newGallery.on('show.simplelightbox', function () {});
