import { onSnapshot, doc } from 'firebase/firestore';
import Notiflix from 'notiflix';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, authFormOpen, authSignOut } from './auth';
import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { refs } from './refs';
import {
  getEmptyColPlaceholder,
  getUnauthorizedLibraryPlaceholder,
} from './emptyColPlaceholder';

const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');
export const gallery = document.querySelector('.gallery');
export let gallerySection;

watchedBtn.addEventListener('click', onWatched);
queueBtn.addEventListener('click', onQueue);

async function onWatched() {
  if (!auth.currentUser) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Будь ласка, авторизуйтесь');
    } else {
      Notiflix.Notify.failure('Please sign in');
    }
    return;
  }

  gallerySection = 'watched';
  localStorage.setItem('section', gallerySection);
  watchedBtn.classList.add('watched-btn_current');
  queueBtn.classList.remove('queue-btn_current');
  gallery.innerHTML = '';
  monitorWatchedChanges();
}

async function onQueue() {
  if (!auth.currentUser) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Будь ласка, авторизуйтесь');
    } else {
      Notiflix.Notify.failure('Please sign in');
    }
    return;
  }

  gallerySection = 'queue';
  localStorage.setItem('section', gallerySection);
  watchedBtn.classList.remove('watched-btn_current');
  queueBtn.classList.add('queue-btn_current');
  gallery.innerHTML = '';
  monitorQueueChanges();
}

function monitorWatchedChanges() {
  onSnapshot(doc(db, 'users', auth.currentUser.uid), snapshot => {
    const { watchedMovies } = snapshot.data();
    let watchedMarkup;
    console.log(watchedMovies);
    if (window.location.hash === '#ua') {
      if (watchedMovies.ua.length === 0) {
        watchedMarkup = getEmptyColPlaceholder();
      } else {
        watchedMarkup = watchedMovies.ua
          .map(createMarkupElemetsGallery)
          .join('');
      }
    } else {
      if (watchedMovies.en.length === 0) {
        watchedMarkup = getEmptyColPlaceholder();
      } else {
        watchedMarkup = watchedMovies.en
          .map(createMarkupElemetsGallery)
          .join('');
      }
    }
    gallery.innerHTML = watchedMarkup;
  });
}

function monitorQueueChanges() {
  onSnapshot(doc(db, 'users', auth.currentUser.uid), snapshot => {
    const { queuedMovies } = snapshot.data();
    let queueMarkup;
    console.log(queuedMovies);
    if (window.location.hash === '#ua') {
      if (queuedMovies.ua.length === 0) {
        queueMarkup = getEmptyColPlaceholder();
      } else {
        queueMarkup = queuedMovies.ua.map(createMarkupElemetsGallery).join('');
      }
    } else {
      if (queuedMovies.en.length === 0) {
        queueMarkup = getEmptyColPlaceholder();
      } else {
        queueMarkup = queuedMovies.en.map(createMarkupElemetsGallery).join('');
      }
    }
    gallery.innerHTML = queueMarkup;
  });
}

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('user logged in: ', user);
    authSignOut.parentElement.classList.remove('visually-hidden');
    authFormOpen.parentElement.classList.add('visually-hidden');
    if (localStorage.getItem('section') === 'queue') {
      onQueue();
    } else {
      onWatched();
    }
  } else {
    console.log('user logged out');
    authSignOut.parentElement.classList.add('visually-hidden');
    authFormOpen.parentElement.classList.remove('visually-hidden');
    gallery.innerHTML = getUnauthorizedLibraryPlaceholder();
  }
  refs.siteNav.classList.remove('visually-hidden');
});
