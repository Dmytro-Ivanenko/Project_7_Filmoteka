const langArr = {
  home: {
    ua: 'ДОДОМУ',
    en: 'HOME',
  },
  library: {
    ua: 'МОЯ БІБЛІОТЕКА',
    en: 'MY LIBRARY',
  },
  logo: {
    ua: 'Фільмотека',
    en: 'Filmoteka',
  },
  login: {
    ua: 'логін',
    en: 'login',
  },
  input: {
    ua: 'пошук фільму',
    en: 'movie search',
  },
  footer: {
    ua: 'Усі права захищено',
    en: 'All Rights Reserved',
  },
  developer: {
    ua: 'Розроблено спільно',
    en: 'Developed with',
  },
  students: {
    ua: 'GoIT Студенти',
    en: 'GoIT Students',
  },
  genre: {
    ua: 'ОБЕРІТЬ ЖАНР',
    en: ' CHOOSE GENRE',
  },
  choose: {
    ua: 'ВИБЕРІТЬ',
    en: 'CHOOSE',
  },
  trailer: {
    ua: 'Дивитися трейлер',
    en: 'Watch the trailer',
  },
  about: {
    ua: 'приблизно',
    en: 'about',
  },
  watched: {
    ua: 'додати в Переглянуті',
    en: 'add to Watched',
  },
  queued: {
    ua: 'додати в чергу',
    en: 'add to queue',
  },
  sing: {
    ua: 'вийти',
    en: 'sign out',
  },
  watch: {
    ua: 'ДИВИЛИСЯ',
    en: 'WATCHED',
  },

  queue: {
    ua: 'в черзі',
    en: 'QUEUE',
  },
  account: {
    ua: 'Немає облікового запису?',
    en: "Don't have an account?",
  },
  singup: {
    ua: 'Реєстрація',
    en: 'Signup',
  },
  google: {
    ua: 'Увійдіть за допомогою Google',
    en: 'Sign in with Google',
  },
  already: {
    ua: 'Вже є аккаунт?',
    en: 'Already have an account?',
  },
    popular: {
    ua: 'Популярні',
    en: 'Popular',
  },
    load: {
    ua: 'Завантажити ще',
    en: 'Load more',
  },
    new: {
    ua: 'Новинки',
    en: 'Novelty',
  },
    lo: {
    ua: 'Логін',
    en: 'Login',
  },
    log: {
    ua: 'Логін',
    en: 'Login',
  },
    si: {
    ua: 'Реєстрація',
    en: 'Signup',
  },
    sig: {
    ua: 'Реєстрація',
    en: 'Signup',
  },
    logi: {
    ua: 'Логін',
    en: 'Login',
  },
};

const select = document.querySelector('select');
const allLang = ['en', 'ua'];
select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  localStorage.setItem('language', lang);
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

export function changeLanguage() {
  if (!localStorage.getItem('language')) {
    window.location.hash = 'en';
  }
  let hash = window.location.hash;

  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href =
      window.location.pathname + '#' + localStorage.getItem('language');
    location.reload();
  }

  select.value = hash;

  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}
changeLanguage();
function changeLang() {
  const input = document.querySelector('.search-form-input');

  if (!input) {
    return;
  }
  if (window.location.hash === '#ua') {
    input.placeholder = 'Пошук фільму';
  } else {
    input.placeholder = 'Movie search';
  }
}
changeLang();
function changeLangSing() {
  const title = document.querySelector('.login-title');
  if (window.location.hash === '#ua') {
    title === 'логін';
  } else {
    title === 'Login';
  }
}
changeLangSing();
function changeLangInputSingUp() {
  const input = document.querySelector('.input-form');
  const inputPass = document.querySelector('.password')
  const inputsingUp = document.querySelector('.input-form-singup');
  const inputsingUpEmail = document.querySelector('.input-email');
  const inputsingUpEmailConf = document.querySelector('.form-conf-pass');
  if (!input) {
    return;
  }
  if (window.location.hash === '#ua') {
    input.placeholder = 'Електронна пошта';
    inputPass.placeholder = 'Пароль';
    inputsingUp.placeholder = 'Пароль';
    inputsingUpEmail.placeholder = 'Електронна пошта';
    inputsingUpEmailConf.placeholder = 'Підтвердьте пароль';

  } else {
    input.placeholder = 'Email';
    inputPass.placeholder = 'Password';
    inputsingUp.placeholder = 'password';
    inputsingUpEmail.placeholder = 'Email';
    inputsingUpEmailConf.placeholder = 'Confirm password';
  }
}
changeLangInputSingUp();
