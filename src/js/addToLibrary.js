import { db, auth } from './auth';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import Notiflix from 'notiflix';
import { currentMovie } from './onCardClick';
import { toggleWatched, toggleQueue } from './onCardClick';
import { refs } from './refs';

export async function addToWatched() {
  if (!auth.currentUser) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Будь ласка, авторизуйтесь');
    } else {
      Notiflix.Notify.failure('Please sign in');
    }
    return;
  }
  try {
    const { watchedMovies } = await getDoc(
      doc(db, 'users', auth.currentUser.uid)
    ).then(res => {
      return res.data();
    });

    if (window.location.hash === '#ua') {
      const { data: enVersion } = await refs.fetchApi.getFilmToIdSecondLang(
        currentMovie.id
      );
      watchedMovies.ua.push(currentMovie);
      watchedMovies.en.push(enVersion);
    } else {
      const { data: uaVersion } = await refs.fetchApi.getFilmToIdSecondLang(
        currentMovie.id
      );
      watchedMovies.en.push(currentMovie);
      watchedMovies.ua.push(uaVersion);
    }

    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      watchedMovies,
    }).then(() => {
      if (window.location.hash === '#ua') {
        Notiflix.Notify.success('Додано в переглянуті');
      } else {
        Notiflix.Notify.success('Added to watched');
      }
      toggleWatched();
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

export async function removeFromWatched() {
  try {
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
      toggleWatched();
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

export async function addToQueue() {
  if (!auth.currentUser) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Будь ласка, авторизуйтесь');
    } else {
      Notiflix.Notify.failure('Please sign in');
    }
    return;
  }
  try {
    const { queuedMovies } = await getDoc(
      doc(db, 'users', auth.currentUser.uid)
    ).then(res => {
      return res.data();
    });

    if (window.location.hash === '#ua') {
      const { data: enVersion } = await refs.fetchApi.getFilmToIdSecondLang(
        currentMovie.id
      );
      queuedMovies.ua.push(currentMovie);
      queuedMovies.en.push(enVersion);
    } else {
      const { data: uaVersion } = await refs.fetchApi.getFilmToIdSecondLang(
        currentMovie.id
      );
      queuedMovies.en.push(currentMovie);
      queuedMovies.ua.push(uaVersion);
    }

    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      queuedMovies,
    }).then(() => {
      if (window.location.hash === '#ua') {
        Notiflix.Notify.success('Додано в чергу');
      } else {
        Notiflix.Notify.success('Added to queue');
      }
      toggleQueue();
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

export async function removeFromQueue() {
  try {
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
      toggleQueue();
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
