import { refs } from './refs';
import { createModalCardMarkup } from './createModalCardMarkup';
import { getTrailerFilm } from './getTrailerFilm';
import { renderTrendingFilms } from './renderTrendingFilms';
import { addToWatched, addToQueue } from './addToLibrary.js';


const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('[data-modal]');
let closeModalBtn = document.querySelector('[data-modal-close]');
let addToWatchedBtn;
let addToQueueBtn;

// ================= Змінна щоб пушити до firebase фільми ================
export let currentMovie;
// =======================================================================

modal.addEventListener('click', modalListener);
document.addEventListener('click', getTrailerFilm);
document.addEventListener('keydown', closeModalEcs);
document.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());

export async function onCardClick(e) {
  if (e.path[2].className !== 'photo-card') {
    return;
  }

  if (e.path[2].className === 'photo-card') {
    modal.classList.remove('is-hidden');
    let id = e.path[2].dataset.id;

    const { data } = await refs.fetchApi.getFilmToId(id);
    currentMovie = data;


    backdropBackground(data);
    // ========== Поправив щоб контент модалки перезаписувався ============
    // modal.insertAdjacentHTML('beforeend', createModalCardMarkup(data));
    modal.innerHTML = createModalCardMarkup(data);
    // ====================================================================
    loadModalBtns();
  }
}

function modalListener(e) {
  if (
    e.path[0].className === 'modal__btn-close' ||
    e.target.classList[0] === 'modal__icon-close' ||
    e.path[0].className === 'backdrop'
  ) {
    closeModalBtn = modal.classList.add('is-hidden');
    unloadModalBtns();
  }
}

function closeModalEcs(e) {
  if (e.code === 'Escape') {
    closeModalBtn = modal.classList.add('is-hidden');
    unloadModalBtns();
  }
}

function backdropBackground(data) {
  backdrop.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
  backdrop.style.backgroundSize = 'cover';
  backdrop.style.backgroundPosition = '50% 50%';
}

function loadModalBtns() {
  addToWatchedBtn = document.querySelector('.modal-card__btn-watched');
  addToQueueBtn = document.querySelector('.modal-card__btn-queue');
  addToWatchedBtn.addEventListener('click', addToWatched);
  addToQueueBtn.addEventListener('click', addToQueue);
}

function unloadModalBtns() {
  addToWatchedBtn.removeEventListener('click', addToWatched);
  addToQueueBtn.removeEventListener('click', addToQueue);
}
