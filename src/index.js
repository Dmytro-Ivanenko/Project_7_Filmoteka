//Imports
// import './js/auth';
// import './js/addToLibrary';
import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { onCardClick } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';
import { backToTop } from './js/backToTop';


import {
  toggleModal,
  closeModalOnBackdropClick,
} from './js/createModalCardsStudents';


// Variables
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

export const body = document.querySelector('body');
export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');

const studentsBtn = document.querySelector('.students-button');
const closeBtn = document.querySelector('.close-button');


// Classes
export const fetchApi = new FetchAPI();

// Listeners
document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
// document.addEventListener('DOMContentLoaded', createGenresFilter());
document.addEventListener('click', getTrailerFilm);
searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));

studentsBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', closeModalOnBackdropClick);

