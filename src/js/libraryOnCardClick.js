import { auth, db } from './auth';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import Notiflix from 'notiflix';
import { gallerySection } from './libraryGallery';
import {
  createLibraryWatchedCardMarkup,
  createLibraryQueueCardMarkup,
} from './createLibraryModalMarkup';
import { gallery } from './libraryGallery';
import { changeLanguage } from './translate';

let watchedRemove;
let queueRemove;
let closeBtn;
let currentMovie;

const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('[data-modal]');

gallery.addEventListener('click', onLibraryClick);

export async function onLibraryClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  const card = e.target.closest('.photo-card');
  const id = Number(card.dataset.id);

  if (gallerySection === 'watched') {
    try {
      const { watchedMovies } = await getDoc(
        doc(db, 'users', auth.currentUser.uid)
      ).then(res => {
        return res.data();
      });

      if (window.location.hash === '#ua') {
        currentMovie = watchedMovies.ua.find(movie => movie.id === id);
      } else {
        currentMovie = watchedMovies.en.find(movie => movie.id === id);
      }

      console.log(currentMovie);

      backdropBackground(currentMovie);
      modal.innerHTML = createLibraryWatchedCardMarkup(currentMovie);

      onWatchedCard();
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    }
  } else {
    try {
      const { queuedMovies } = await getDoc(
        doc(db, 'users', auth.currentUser.uid)
      ).then(res => {
        return res.data();
      });

      if (window.location.hash === '#ua') {
        currentMovie = queuedMovies.ua.find(movie => movie.id === id);
      } else {
        currentMovie = queuedMovies.en.find(movie => movie.id === id);
      }

      console.log(currentMovie);

      backdropBackground(currentMovie);
      modal.innerHTML = createLibraryQueueCardMarkup(currentMovie);

      onQueueCard();
    } catch (error) {
      Notiflix.Notify.failure(error.message);
    }
  }
  changeLanguage();
  closeBtn = document.querySelector('[data-modal-close]');
  closeBtn.addEventListener('click', toggleLibraryModal);
  backdrop.addEventListener('click', onBackdropClick);
  window.addEventListener('keydown', onEscPress);
  modal.classList.remove('is-hidden');
}

function backdropBackground(data) {
  backdrop.style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${data.backdrop_path}`;
  backdrop.style.backgroundSize = 'cover';
  backdrop.style.backgroundPosition = '50% 50%';
}

function onWatchedCard() {
  watchedRemove = document.querySelector('[data-watched-remove]');
  watchedRemove.addEventListener('click', removeFromWatchedLib);
}

function onQueueCard() {
  queueRemove = document.querySelector('[data-queue-remove]');
  queueRemove.addEventListener('click', removeFromQueueLib);
}

async function removeFromQueueLib() {
  const { queuedMovies } = await getDoc(
    doc(db, 'users', auth.currentUser.uid)
  ).then(res => {
    return res.data();
  });
  queuedMovies.ua = queuedMovies.ua.filter(
    movie => movie.id !== currentMovie.id
  );
  queuedMovies.en = queuedMovies.en.filter(
    movie => movie.id !== currentMovie.id
  );
  await updateDoc(doc(db, 'users', auth.currentUser.uid), {
    queuedMovies,
  }).then(() => {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.success('Успішно видалено');
    } else {
      Notiflix.Notify.success('Removed successfully');
    }

    toggleLibraryModal();
  });
}

async function removeFromWatchedLib() {
  const { watchedMovies } = await getDoc(
    doc(db, 'users', auth.currentUser.uid)
  ).then(res => {
    return res.data();
  });
  watchedMovies.ua = watchedMovies.ua.filter(
    movie => movie.id !== currentMovie.id
  );
  watchedMovies.en = watchedMovies.en.filter(
    movie => movie.id !== currentMovie.id
  );
  await updateDoc(doc(db, 'users', auth.currentUser.uid), {
    watchedMovies,
  }).then(() => {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.success('Успішно видалено');
    } else {
      Notiflix.Notify.success('Removed successfully');
    }

    toggleLibraryModal();
  });
}

function toggleLibraryModal() {
  backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscPress);
  closeBtn.removeEventListener('click', toggleLibraryModal);
  backdrop.removeEventListener('click', onBackdropClick);
  if (watchedRemove) {
    watchedRemove.removeEventListener('click', removeFromWatchedLib);
  } else {
    queueRemove.removeEventListener('click', removeFromQueueLib);
  }
}

function onEscPress(e) {
  if (e.code === 'Escape') {
    toggleLibraryModal();
  }
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    toggleLibraryModal();
  }
}
