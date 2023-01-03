import { refs } from './refs';
import { renderGallery } from './renderGallery';
import { addPagination } from './pagination';

let trendPagination;

export async function renderTrendingFilms() {
  refs.galleryList.innerHTML = '';
  refs.fetchApi.page = 1;
  await refs.fetchApi.fillGenreList();
  const { data } = await refs.fetchApi.fetchTrendingFilms();
  renderGallery(data.results);

  trendPagination = addPagination(data);
  trendPagination.on('beforeMove', loadMoreTrending);
}

async function loadMoreTrending(e) {
  const currentPage = e.page;
  const { data } = await refs.fetchApi.fetchTrendingFilms(currentPage);
  renderGallery(data.results);
}
