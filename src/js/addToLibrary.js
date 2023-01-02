import { db, auth } from './auth';
import { getDoc, doc, setDoc } from 'firebase/firestore';
import Notiflix from 'notiflix';
import { currentMovie } from './onCardClick';

export async function addToWatched() {
  if (!auth.currentUser) {
    Notiflix.Notify.failure('Please sign in');
    return;
  }
  try {
    const userData = await getDoc(doc(db, 'users', auth.currentUser.uid)).then(
      res => {
        return res.data();
      }
    );
    const { userId, watchedMovies, queuedMovies, userEmail } = userData;

    if (watchedMovies.find(movie => movie.id === currentMovie.id)) {
      Notiflix.Notify.failure('Already in collection');
      return;
    }

    watchedMovies.push(currentMovie);
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      userId,
      userEmail,
      watchedMovies,
      queuedMovies,
    }).then(() => {
      Notiflix.Notify.success('Added to watched');
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

export async function addToQueue() {
  if (!auth.currentUser) {
    Notiflix.Notify.failure('Please sign in');
    return;
  }
  try {
    const userData = await getDoc(doc(db, 'users', auth.currentUser.uid)).then(
      res => {
        return res.data();
      }
    );
    const { userId, watchedMovies, queuedMovies, userEmail } = userData;

    if (queuedMovies.find(movie => movie.id === currentMovie.id)) {
      Notiflix.Notify.failure('Already in collection');
      return;
    }

    queuedMovies.push(currentMovie);
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      userId,
      userEmail,
      watchedMovies,
      queuedMovies,
    }).then(() => {
      Notiflix.Notify.success('Added to queue');
    });
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}
