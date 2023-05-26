import { search } from './handlers.js';

const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', search);
searchForm.dispatchEvent(new Event('submit'));
