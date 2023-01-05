import {
  galleryList,
  fetchApi,
  searchResult,
  loadMoreSearchBtn,
  loadMoreTrend,
} from '../index';
import { renderTrendingFilms } from './renderTrendingFilms';
import { renderGallery } from './renderGallery';
import { addPagination } from './pagination';

export let searchValue = '';
let searchPagination = null;
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
      loadMoreSearchBtn.classList.remove('visually-hidden');
      loadMoreTrend.classList.add('visually-hidden');
      searchPagination = addPagination(data, 1);
      searchPagination.on('beforeMove', loadMoreSearch);
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadMoreSearch(e) {
  const currentPage = e.page;
  fetchApi.updateCurPage(currentPage);
  const { data } = await fetchApi.fetchSearchFilms(
    searchValue.trim(),
    currentPage
  );
  renderGallery(data.results);
}
