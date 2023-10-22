import Notiflix from 'notiflix';
import pingAPI from './pixabay.js';

const getPhotoElement = photo => {
  const container = document.createElement('div');
  container.classList.add('photo-card');
  const a = document.createElement('a');
  a.href = photo.largeImageURL;
  const img = document.createElement('img');
  img.src = photo.webformatURL;
  img.alt = photo.tags;
  img.setAttribute('loading', 'lazy');
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('info');

  const infoItemLikes = document.createElement('p');
  infoItemLikes.classList.add('info-item');
  const writeInfoLikes = document.createElement('b');
  writeInfoLikes.textContent = `Likes:`;
  infoItemLikes.appendChild(writeInfoLikes);
  const fetchedInfoLikes = document.createElement('p');
  fetchedInfoLikes.textContent = `${photo.likes}`;
  infoItemLikes.appendChild(fetchedInfoLikes);

  const infoItemViews = document.createElement('p');
  infoItemViews.classList.add('info-item');
  const writeInfoViews = document.createElement('b');
  writeInfoViews.textContent = 'Views:';
  infoItemViews.appendChild(writeInfoViews);
  const fetchedInfoViews = document.createElement('p');
  fetchedInfoViews.textContent = `${photo.views}`;
  infoItemViews.appendChild(fetchedInfoViews);

  const infoItemComments = document.createElement('p');
  infoItemComments.classList.add('info-item');
  const writeInfoComments = document.createElement('b');
  writeInfoComments.textContent = 'Comments:';
  infoItemComments.appendChild(writeInfoComments);
  const fetchedInfoComments = document.createElement('p');
  fetchedInfoComments.textContent = `${photo.comments}`;
  infoItemComments.appendChild(fetchedInfoComments);

  const infoItemDownloads = document.createElement('p');
  infoItemDownloads.classList.add('info-item');
  const writeInfoDownloads = document.createElement('b');
  writeInfoDownloads.textContent = 'Downloads:';
  infoItemDownloads.appendChild(writeInfoDownloads);
  const fetchedInfoDownloads = document.createElement('p');
  fetchedInfoDownloads.textContent = `${photo.downloads}`;
  infoItemDownloads.appendChild(fetchedInfoDownloads);

  container.appendChild(a);
  a.appendChild(img);
  container.appendChild(infoContainer);
  infoContainer.appendChild(infoItemLikes);
  infoContainer.appendChild(infoItemViews);
  infoContainer.appendChild(infoItemComments);
  infoContainer.appendChild(infoItemDownloads);

  return container;
};

function drawPhotos({ photos, page }) {
  const photoContainer = document.querySelector('#gallery');
  if (page === '1') {
    photoContainer.innerHTML = '';
  }

  const containers = photos.map(getPhotoElement);
  containers.forEach(container => {
    photoContainer.appendChild(container);
  });
}
export async function loadPhotos({ q, page }) {
  const photos = await pingAPI({ q, page });
  if (photos.error) {
    alert(photos.error);
    return;
  }
  if (photos.length === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    return;
  }
  drawPhotos({ photos, page });

  return;
}
