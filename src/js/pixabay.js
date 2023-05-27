import axios from 'axios';
import { API_PATH, DEFAULT_PARAMS } from './config.js';

export default async function pingAPI({ q = '', page = '1' }) {
  try {
    const params = {
      ...DEFAULT_PARAMS,
      page,
      q,
    };
    const response = await axios.get(API_PATH, { params });

    if (!response.data) {
      return [];
    }

    const data = response.data;
    const photos = data.hits;
    const totalHits = data.totalHits;
    console.log(totalHits);

    return photos;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status === 400) {
        return [];
      }
      if (status === 424) {
        Notiflix.Notify.failure(
          `We're sorry, but you've reached the end of search results.`
        );
        return [];
      }
      return { error: status };
    }
    return { error: error.toString() };
  }
}
