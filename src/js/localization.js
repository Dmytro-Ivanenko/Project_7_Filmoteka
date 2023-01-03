import axios from 'axios';

import { searchFilms } from './searchFilms';
let lang;
const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const ID_URL = `${BASE_URL}/movie/`;
const GANRE_LIST_URL = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
let searchValue = '';
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




 function defineLanguage(str) {
  const uaSymbols = 'йцукенгшщзхїфівапролджєячсмитьбю';

    for (let i = 0, l = str.length; i < l; i++) {
    if (uaSymbols.includes(str[i])) return 'ua-UA'; 
  }

  return 'en-EN';
}


