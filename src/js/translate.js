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
    en: 'Developed with by',
  },
  students: {
    ua: 'GoIT Студенти',
    en: ' GoIT Students',
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
