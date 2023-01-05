import { auth } from './auth';
import { onAuthStateChanged } from 'firebase/auth';
import { authSignOut, authFormOpen } from './auth';
import { refs } from './refs';

onAuthStateChanged(auth, user => {
  if (user) {
    console.log('user logged in: ', user);
    authSignOut.parentElement.classList.remove('visually-hidden');
    authFormOpen.parentElement.classList.add('visually-hidden');
  } else {
    console.log('user logged out');
    authSignOut.parentElement.classList.add('visually-hidden');
    authFormOpen.parentElement.classList.remove('visually-hidden');
  }
  refs.siteNav.classList.remove('visually-hidden');
});
