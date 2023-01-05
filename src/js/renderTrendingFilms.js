import { galleryList, fetchApi } from '../index';
import { renderGallery } from './renderGallery';
import { addPagination } from './pagination';

let trendPagination;

export async function renderTrendingFilms() {
  galleryList.innerHTML = '';
  fetchApi.page = 1;
  await fetchApi.fillGenreList();
  const { data } = await fetchApi.fetchTrendingFilms();
  renderGallery(data.results);

  trendPagination = addPagination(data, 1);
  trendPagination.on('beforeMove', loadMoreTrending);
}

async function loadMoreTrending(e) {
  const currentPage = e.page;
  fetchApi.updateCurPage(currentPage);
  const { data } = await fetchApi.fetchTrendingFilms(currentPage);
  renderGallery(data.results);
}
