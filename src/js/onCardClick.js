import { refs } from './refs';
import { createModalCardMarkup } from './createModalCardMarkup';
import { getTrailerFilm } from './getTrailerFilm';
import { renderTrendingFilms } from './renderTrendingFilms';
import {
  addToWatched,
  addToQueue,
  removeFromWatched,
  removeFromQueue,
} from './addToLibrary.js';
import { auth, db } from './auth.js';
import { getDoc, doc } from 'firebase/firestore';
import { changeLanguage } from './translate';

const gallery = document.querySelector('.gallery');
export const backdrop = document.querySelector('.backdrop');
export const modal = document.querySelector('[data-modal]');

let closeModalBtn;
let addToWatchedBtn;
let addToQueueBtn;

gallery.addEventListener('click', onCardClick);

// ================= Змінна щоб пушити до firebase фільми ================
export let currentMovie;
// =======================================================================

document.addEventListener('click', getTrailerFilm);
gallery.addEventListener('click', onCardClick);
document.addEventListener('DOMContentLoaded', renderTrendingFilms());

export async function onCardClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const card = e.target.closest('.photo-card');
  const id = Number(card.dataset.id);

  const { data } = await refs.fetchApi.getFilmToId(id);
  currentMovie = data;

  backdropBackground(data);
  modal.innerHTML = createModalCardMarkup(data);

  closeModalBtn = document.querySelector('[data-modal-close]');

  closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', toggleModal);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscPress);
  loadModalBtns();
  toggleBtns();
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

export function toggleWatched() {
  if (window.location.hash === '#ua') {
    if (addToWatchedBtn.textContent === 'додати в Переглянуті') {
      addToWatchedBtn.textContent = 'прибрати з Переглянутих';
      addToWatchedBtn.removeEventListener('click', addToWatched);
      addToWatchedBtn.addEventListener('click', removeFromWatched);
      addToWatchedBtn.classList.add('modal-card__btn-queue_active');
    } else {
      addToWatchedBtn.textContent = 'додати в Переглянуті';
      addToWatchedBtn.removeEventListener('click', removeFromWatched);
      addToWatchedBtn.addEventListener('click', addToWatched);
      addToWatchedBtn.classList.remove('modal-card__btn-queue_active');
    }
  } else {
    if (addToWatchedBtn.textContent === 'add to Watched') {
      addToWatchedBtn.textContent = 'remove from watched';
      addToWatchedBtn.removeEventListener('click', addToWatched);
      addToWatchedBtn.addEventListener('click', removeFromWatched);
      addToWatchedBtn.classList.add('modal-card__btn-watched_active');
    } else {
      addToWatchedBtn.textContent = 'add to Watched';
      addToWatchedBtn.removeEventListener('click', removeFromWatched);
      addToWatchedBtn.addEventListener('click', addToWatched);
      addToWatchedBtn.classList.remove('modal-card__btn-watched_active');
    }
  }
}

export function toggleQueue() {
  if (window.location.hash === '#ua') {
    if (addToQueueBtn.textContent === 'додати в чергу') {
      addToQueueBtn.textContent = 'прибрати з черги';
      addToQueueBtn.removeEventListener('click', addToQueue);
      addToQueueBtn.addEventListener('click', removeFromQueue);
      addToQueueBtn.classList.add('modal-card__btn-queue_active');
    } else {
      addToQueueBtn.textContent = 'додати в чергу';
      addToQueueBtn.removeEventListener('click', removeFromQueue);
      addToQueueBtn.addEventListener('click', addToQueue);
      addToQueueBtn.classList.remove('modal-card__btn-queue_active');
    }
  } else {
    if (addToQueueBtn.textContent === 'add to queue') {
      addToQueueBtn.textContent = 'remove from queue';
      addToQueueBtn.removeEventListener('click', addToQueue);
      addToQueueBtn.addEventListener('click', removeFromQueue);
      addToQueueBtn.classList.add('modal-card__btn-queue_active');
    } else {
      addToQueueBtn.textContent = 'add to queue';
      addToQueueBtn.removeEventListener('click', removeFromQueue);
      addToQueueBtn.addEventListener('click', addToQueue);
      addToQueueBtn.classList.remove('modal-card__btn-queue_active');
    }
  }
}

async function toggleBtns() {
  if (auth.currentUser) {
    const { watchedMovies, queuedMovies } = await getDoc(
      doc(db, 'users', auth.currentUser.uid)
    ).then(res => {
      modal.classList.remove('is-hidden');
      return res.data();
    });

    changeLanguage();

    if (window.location.hash === '#ua') {
      if (watchedMovies.ua.find(movie => movie.id === currentMovie.id)) {
        toggleWatched();
      }
      if (queuedMovies.ua.find(movie => movie.id === currentMovie.id)) {
        toggleQueue();
      }
    } else {
      if (watchedMovies.en.find(movie => movie.id === currentMovie.id)) {
        toggleWatched();
      }
      if (queuedMovies.en.find(movie => movie.id === currentMovie.id)) {
        toggleQueue();
      }
    }
  } else {
    changeLanguage();
    modal.classList.remove('is-hidden');
  }
}

function toggleModal() {
  backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
  closeModalBtn.removeEventListener('click', toggleModal);
  backdrop.removeEventListener('click', onBackdropClick);
  addToWatchedBtn.removeEventListener('click', addToWatched);
  addToWatchedBtn.removeEventListener('click', removeFromWatched);
  addToQueueBtn.removeEventListener('click', addToQueue);
  addToQueueBtn.removeEventListener('click', removeFromQueue);
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    toggleModal();
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
  }
}

export async function onUpcomingClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const card = e.target.closest('.upcoming__item');
  const id = Number(card.dataset.id);

  const { data } = await refs.fetchApi.getFilmToId(id);
  currentMovie = data;

  backdropBackground(data);
  modal.innerHTML = createModalCardMarkup(data);

  closeModalBtn = document.querySelector('[data-modal-close]');
  closeModalBtn.addEventListener('click', toggleModal);

  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscPress);
  loadModalBtns();
  toggleBtns();
}
