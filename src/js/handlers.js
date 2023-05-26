import { loadPhotos } from './ui.js';

export async function search(e) {
  e.preventDefault();

  e.target.page.value = '1';
  const q = e.target.q.value;
  await loadPhotos({ q, page: '1' });
}
