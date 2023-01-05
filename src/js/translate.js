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
  queue: {
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
};

const select = document.querySelector('select');
const allLang = ['en', 'ua'];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + '#' + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  console.log(hash);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#en';
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

const texts_ua = 'пошук фільму';

const text_en = 'movie search';

function changeLang() {
  const input = document.querySelector('.search-form-input');

  if (!input) {
    return;
  }

  if (window.location.hash === '#ua') {
    input.placeholder = texts_ua;
  } else {
    input.placeholder = text_en;
  }
}
changeLang();
