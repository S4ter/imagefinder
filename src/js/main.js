import { infiniteScroll, search } from './handlers.js';

export const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', search);
searchForm.dispatchEvent(new Event('submit'));

window.addEventListener('scroll', infiniteScroll);
