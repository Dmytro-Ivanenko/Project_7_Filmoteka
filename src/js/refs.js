import { FetchAPI } from './api';

export const refs = {
  searchForm: document.querySelector('.search-form-input'),
  galleryList: document.querySelector('.gallery'),
  searchResult: document.querySelector('.search-result'),
  fetchApi: new FetchAPI(),
  upcomingList: document.querySelector('.glide__slides'),
  siteNav: document.querySelector('.site-nav'),
  loadMoreTrend: document.querySelector('.loadMoreBtn'),
  loadMoreSearchBtn: document.querySelector('.loadMoreSearchBtn'),
  loadMoreGenreBtn: document.querySelector('.loadMoreGenreBtn'),
};
