import pingAPI from './pixabay.js';

const getPhotoElement = photo => {
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('photoDiv');
  const img = document.createElement('img');
  img.classList.add('photo');
  img.src = photo.webformatURL;
  return img;
};

function drawPhotos({ photos, page }) {
  const photoContainer = document.querySelector('#gallery');
  if (page === '1') {
    photoContainer.innerHTML = '';
  }

  const children = photos.map(getPhotoElement);
  photoContainer.append(...children);
}
export async function loadPhotos({ q, page }) {
  const photos = await pingAPI({ q, page });
  if (photos.error) {
    alert(photos.error);
    return;
  }
  drawPhotos({ photos, page });
  return;
}
