import { galleryList, fetchApi, searchResult } from '../index';
import { renderTrendingFilms } from './renderTrendingFilms';
import { renderGallery } from './renderGallery';

export async function searchFilms(e) {
  const { value } = e.target;

  try {
    if (value.trim() === '') {
      renderTrendingFilms();
      return;
    }

    galleryList.innerHTML = '';
    fetchApi.page = 1;
    const { data } = await fetchApi.fetchSearchFilms(value.trim());

    if (data.total_results === 0) {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and!';
      renderTrendingFilms();
      return;
    }

    if (data.total_results > 0) {
      searchResult.innerHTML = '';
      renderGallery(data.results);
    }
  } catch (error) {
    console.log(error);
    console.log('hello');
  }
}
