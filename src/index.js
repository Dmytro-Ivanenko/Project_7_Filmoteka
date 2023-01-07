
import { entryField } from './js/searchFilms';
import { onCardClick, onUpcomingClick } from './js/onCardClick';
import { backToTop } from './js/backToTop';
import { renderUpcoming } from './js/renderUpcoming';
import { loadData } from './js/preloader';
import { onUpcomingClick } from './js/onUpcomingClick';
import { fullscreenToggle } from './js/fullscreen';
import {
  toggleModal,
  closeModalOnBackdropClick,
} from './js/createModalCardsStudents';


//Imports
import './js/home';
import './js/auth';
import './js/addToLibrary';
import './js/signupModal';
import './js/getTrailerFilm';

import { FetchAPI } from './js/api';

import { createGenresFilter } from './js/genresFilter';
import { switchMode } from './js/mode';
import { onLoadMore, onLoadMoreSearch } from './js/loadMore';

import { fetchGenreUrl } from './js/api';
import { slides } from './js/onUpcomingClick';

export const fullscreenBtn = document.querySelector('.fullscreen-btn');
export const body = document.querySelector('body');
export const galleryList = document.querySelector('.gallery');
export const modeCheckbox = document.querySelector('.mode-checkbox');
const studentsBtn = document.querySelector('.students-button');
const closeBtn = document.querySelector('.close-button');

// Classes
export const fetchApi = new FetchAPI();

// Listeners
document.addEventListener('DOMContentLoaded', createGenresFilter);
modeCheckbox.addEventListener('click', switchMode);
document.addEventListener('DOMContentLoaded', renderUpcoming);
fullscreenBtn.addEventListener('click', fullscreenToggle);

studentsBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', closeModalOnBackdropClick);

