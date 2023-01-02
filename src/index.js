//Imports
import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { onCardClick } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';
import { backToTop } from './js/backToTop';
import { openModal } from './js/createModalCardsStudents';
import { closeModal } from './js/createModalCardsStudents';
import { onClick } from './js/createModalCardsStudents';




// Variables
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;


export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');
// export const studentsModalCard = document.querySelector('.students-list');
export const modal = document.querySelector('#myModal');
export const btn = document.querySelector('#myBtn');
export const span = document.querySelector('.close');


// Classes
export const fetchApi = new FetchAPI();

// Listeners
document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
document.addEventListener('click', getTrailerFilm);
searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));
// studentsModalCard.addEventListener('click', onClickCardStudents);
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);
window.addEventListener('click', onClick);



