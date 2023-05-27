import { API_PATH, DEFAULT_PARAMS } from './config.js';

export default async function pingAPI({ q = '', page = '1' }) {
  try {
    const querystring = new URLSearchParams({
      ...DEFAULT_PARAMS,
      page,
      q,
    });
    const response = await fetch(`${API_PATH}?${querystring}`);

    if (!response.ok) {
      if (response.status === 400) {
        return [];
      }
      if (response.status === 424) {
        Notiflix.Notify.failure(
          `We're sorry, but you've reached the end of search results.`
        );
        return [];
      }
      return { error: response.status };
    }
    const data = await response.json();
    const photos = data.hits;
    const totalHits = data.totalHits;
    console.log(totalHits);

    return photos;
  } catch (e) {
    return { error: e.toString() };
  }
}
