//Imports
// import './js/auth';
import './js/addToLibrary';
import { FetchAPI } from './js/api';
import { renderTrendingFilms } from './js/renderTrendingFilms';
import { searchFilms } from './js/searchFilms';
import { onCardClick } from './js/onCardClick';
import { getTrailerFilm } from './js/getTrailerFilm';
import { backToTop } from './js/backToTop';
import {openModalCardStudents, closeModalCardStudents, onClickCardStudents} from './js/createModalCardsStudents';

// Variables
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;


export const body = document.querySelector('body');
export const searchForm = document.querySelector('.search-form-input');
export const galleryList = document.querySelector('.gallery');
export const searchResult = document.querySelector('.search-result');
export const modalCardStudents = document.querySelector('#myBtnCardStudents');
export const btnCardStudents = document.querySelector('#myModalCardStudents');
export const spanCardStudents = document.querySelector('.close');

// Classes
export const fetchApi = new FetchAPI();

// Listeners
document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());
// document.addEventListener('DOMContentLoaded', createGenresFilter());
document.addEventListener('click', getTrailerFilm);
searchForm.addEventListener('input', debounce(searchFilms, DEBOUNCE_DELAY));
btnCardStudents.addEventListener('click', openModalCardStudents);
spanCardStudents.addEventListener('click', closeModalCardStudents);
window.addEventListener('click', onClickCardStudents);