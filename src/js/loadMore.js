import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { galleryList, fetchApi } from '../index.js';
import { addPagination } from './pagination';
import { renderGallery } from './renderGallery';
import { searchFilms, searchValue } from './searchFilms';
import { async } from '@firebase/util';

function renderGalleryMore(galleryEl) {
  const galleryElements = galleryEl
    .map(elem => createMarkupElemetsGallery(elem, fetchApi))
    .join('');
  galleryList.insertAdjacentHTML('beforeend', galleryElements);
}

async function renderTrendingFilms() {
  fetchApi.numberOfPage();
  await fetchApi.fillGenreList();
  const { data } = await fetchApi.fetchTrendingFilms();
  renderGalleryMore(data.results);
}

export async function onLoadMore() {
  renderTrendingFilms();
  const { data } = await fetchApi.fetchTrendingFilms();
  const pages = fetchApi.curPage();
  trendPagination = addPagination(data, pages);
  trendPagination.on('beforeMove', loadMoreTrending);
}

async function loadMoreTrending(e) {
  const currentPage = e.page;
  fetchApi.updateCurPage(currentPage);
  const pages = fetchApi.curPage();
  const { data } = await fetchApi.fetchTrendingFilms(pages);
  renderGallery(data.results);
}

// Search
async function loadMoreSearch(e) {
  const currentPage = e.page;
  fetchApi.updateCurPage(currentPage);
  const pages = fetchApi.curPage();
  const { data } = await fetchApi.fetchSearchFilms(searchValue.trim(), pages);
  renderGallery(data.results);
}
export async function onLoadMoreSearch() {
  fetchApi.numberOfPage();
  const pages = fetchApi.curPage();
  const { data } = await fetchApi.fetchSearchFilms(searchValue.trim(), pages);
  renderGalleryMore(data.results);

  searchPagination = addPagination(data, pages);
  searchPagination.on('beforeMove', loadMoreSearch);
}
