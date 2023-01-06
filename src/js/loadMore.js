import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { refs } from './refs';
import { addPagination } from './pagination';
import { renderGallery } from './renderGallery';
import { searchFilms, searchValue } from './searchFilms';
// import { async } from '@firebase/util';

refs.loadMoreTrend.addEventListener('click', onLoadMore);
refs.loadMoreSearchBtn.addEventListener('click', onLoadMoreSearch);

function renderGalleryMore(galleryEl) {
  const galleryElements = galleryEl
    .map(elem => createMarkupElemetsGallery(elem, refs.fetchApi))
    .join('');
  refs.galleryList.insertAdjacentHTML('beforeend', galleryElements);
}

async function renderTrendingFilms() {
  const page = refs.fetchApi.numberOfPage();
  const { data } = await refs.fetchApi.fetchTrendingFilms(page);
  renderGalleryMore(data.results);
}

export async function onLoadMore() {
  renderTrendingFilms();
  const { data } = await refs.fetchApi.fetchTrendingFilms();
  const pages = refs.fetchApi.curPage();
  trendPagination = addPagination(data, pages);
  trendPagination.on('beforeMove', loadMoreTrending);
}

async function loadMoreTrending(e) {
  const currentPage = e.page;
  refs.fetchApi.updateCurPage(currentPage);
  const pages = refs.fetchApi.curPage();
  const { data } = await refs.fetchApi.fetchTrendingFilms(pages);
  renderGallery(data.results);
}

// Search
async function loadMoreSearch(e) {
  const currentPage = e.page;
  refs.fetchApi.updateCurPage(currentPage);
  const pages = refs.fetchApi.curPage();
  const { data } = await refs.fetchApi.fetchSearchFilms(
    searchValue.trim(),
    pages
  );
  renderGallery(data.results);
}
export async function onLoadMoreSearch() {
  refs.fetchApi.numberOfPage();
  const pages = refs.fetchApi.curPage();
  const { data } = await refs.fetchApi.fetchSearchFilms(
    searchValue.trim(),
    pages
  );
  renderGalleryMore(data.results);

  searchPagination = addPagination(data, pages);
  searchPagination.on('beforeMove', loadMoreSearch);
}
