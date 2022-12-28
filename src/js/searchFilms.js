import { galleryList, fetchApi, searchResult } from '../index';
import { renderTrendingFilms } from './renderTrendingFilms';
import { renderGallery } from './renderGallery';
import { addPagination } from './pagination';

let searchValue = '';
export async function searchFilms(e) {
  searchValue = e.target.value;

  try {
    if (searchValue.trim() === '') {
      renderTrendingFilms();
      return;
    }

    galleryList.innerHTML = '';

    const { data } = await fetchApi.fetchSearchFilms(searchValue.trim());

    if (data.total_results === 0) {
      searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and!';
      renderTrendingFilms();
      return;
    }

    if (data.total_results > 0) {
      searchResult.innerHTML = '';
      renderGallery(data.results);

      searchPagination = addPagination(data);
      searchPagination.on('beforeMove', loadMoreSearch);
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreSearch(e) {
  const currentPage = e.page;
  const { data } = await fetchApi.fetchSearchFilms(
    searchValue.trim(),
    currentPage
  );
  renderGallery(data.results);
}
