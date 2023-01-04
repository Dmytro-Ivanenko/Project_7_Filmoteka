import { FetchAPI } from './api';

export const refs = {
  searchForm: document.querySelector('.search-form-input'),
  galleryList: document.querySelector('.gallery'),
  searchResult: document.querySelector('.search-result'),
  fetchApi: new FetchAPI(),
};
