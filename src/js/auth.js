import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from 'firebase/auth';
import Notiflix from 'notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyAEEIQrC1FklTDIB6wSl3Lj1Ay7wmlBG7E',
  authDomain: 'filmoteka-df132.firebaseapp.com',
  projectId: 'filmoteka-df132',
  storageBucket: 'filmoteka-df132.appspot.com',
  messagingSenderId: '615822401764',
  appId: '1:615822401764:web:92347d76b8e407932b8cf1',
  measurementId: 'G-CW2YT3SCBD',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
auth.useDeviceLanguage();
const provider = new GoogleAuthProvider();

export const authFormOpen = document.querySelector('[data-auth-open]');
export const authSignOut = document.querySelector('[data-auth-sign-out]');

const authGoogle = document.querySelector('.btn-google');
const loginForm = document.querySelector('.login__form');
const signUpForm = document.querySelector('.signup__form');

const authBackdrop = document.querySelector('.backdrop-login');

authSignOut.addEventListener('click', logout);
authGoogle.addEventListener('click', onGoogleAuth);

loginForm.addEventListener('submit', loginEmailPassword);
signUpForm.addEventListener('submit', createAccount);

async function onGoogleAuth() {
  try {
    signInWithRedirect(auth, provider);
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

async function loginEmailPassword(e) {
  e.preventDefault();

  const loginEmail = loginForm.elements.email.value;
  const loginPassword = loginForm.elements.password.value;

  if (!loginEmail || !loginPassword) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Введіть адресу електронної пошти та пароль');
    } else {
      Notiflix.Notify.failure('Enter email and password');
    }
    return;
  }

  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword).then(
      () => {
        const userName = loginEmail.split('@').shift();
        if (window.location.hash === '#ua') {
          Notiflix.Notify.success(`Вітаємо, ${userName}`);
        } else {
          Notiflix.Notify.success(`Welcome, ${userName}`);
        }
        authBackdrop.classList.add('is-hidden');
        loginForm.reset();
      }
    );
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

async function createAccount(e) {
  e.preventDefault();

  const email = signUpForm.elements.email.value;
  const password = signUpForm.elements.password.value;
  const confirmedPassword = signUpForm.elements.confirm.value;

  if (!email || !password) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Введіть адресу електронної пошти та пароль');
    } else {
      Notiflix.Notify.failure('Enter email and password');
    }

    return;
  }

  if (password !== confirmedPassword) {
    if (window.location.hash === '#ua') {
      Notiflix.Notify.failure('Введені паролі не співпадають');
    } else {
      Notiflix.Notify.failure('Passwords do not match');
    }

    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async cred => {
        await setDoc(doc(db, 'users', `${cred.user.uid}`), {
          userId: cred.user.uid,
          userEmail: cred.user.email,
          watchedMovies: {
            en: [],
            ua: [],
          },
          queuedMovies: {
            en: [],
            ua: [],
          },
        });
        const userName = email.split('@').shift();
        if (window.location.hash === '#ua') {
          Notiflix.Notify.success(`Вітаємо, ${userName}`);
        } else {
          Notiflix.Notify.success(`Welcome, ${userName}`);
        }
        authBackdrop.classList.add('is-hidden');
        signUpForm.reset();
      }
    );
  } catch (error) {
    Notiflix.Notify.failure(error.message);
  }
}

function logout(e) {
  e.preventDefault();
  signOut(auth).then(location.reload());
}

export async function monitorRedirect() {
  await getRedirectResult(auth).then(async cred => {
    if (cred) {
      const userName = cred.user.email.split('@').shift();
      if (window.location.hash === '#ua') {
        Notiflix.Notify.success(`Вітаємо, ${userName}`);
      } else {
        Notiflix.Notify.success(`Welcome, ${userName}`);
      }
      const userData = await getDoc(doc(db, 'users', cred.user.uid)).then(
        res => {
          return res.data();
        }
      );
      if (!userData) {
        setDoc(doc(db, 'users', `${cred.user.uid}`), {
          userId: cred.user.uid,
          userEmail: cred.user.email,
          watchedMovies: {
            en: [],
            ua: [],
          },
          queuedMovies: {
            en: [],
            ua: [],
          },
        });
      }
    }
  });
}

monitorRedirect();
