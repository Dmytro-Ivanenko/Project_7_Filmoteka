import { refs } from './refs';

import { renderTrendingFilms } from './renderTrendingFilms';
import { renderGallery } from './renderGallery';
import { addPagination } from './pagination';
import { loadMoreTrend, loadMoreSearchBtn } from '../index';

export let searchValue = '';
let searchPagination = null;

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

export const entryField = refs.searchForm.addEventListener(
  'input',
  debounce(searchFilms, DEBOUNCE_DELAY)
);

export async function searchFilms(e) {
  searchValue = e.target.value;

  try {
    if (searchValue.trim() === '') {
      renderTrendingFilms();
      return;
    }

    refs.galleryList.innerHTML = '';

    const { data } = await refs.fetchApi.fetchSearchFilms(searchValue.trim());

    if (data.total_results === 0) {
      refs.searchResult.innerHTML =
        'Search result not successful. Enter the correct movie name and!';
      if (window.location.hash === '#ua') {
        refs.searchResult.innerHTML =
          'Результат пошуку невдалий. Введіть правильну назву фільму!';
        renderTrendingFilms();
        return;
      }
    }

    if (data.total_results > 0) {
      refs.searchResult.innerHTML = '';
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

  const { data } = await refs.fetchApi.fetchSearchFilms(
    searchValue.trim(),
    currentPage
  );
  renderGallery(data.results);
}
