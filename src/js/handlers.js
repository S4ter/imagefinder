import { loadPhotos } from './ui.js';
import { searchForm } from './main.js';
export async function search(e) {
  e.preventDefault();

  e.target.page.value = '1';
  const q = e.target.q.value;
  await loadPhotos({ q, page: '1' });
}

export async function infiniteScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    const page = parseInt(searchForm.page.value);
    searchForm.page.value = page + 1;
    await loadPhotos({ q: searchForm.q.value, page: searchForm.page.value });
  }
}
