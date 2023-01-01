import { galleryList, fetchApi } from '../index.js';
import { renderGallery } from './renderGallery.js';
import { addPagination } from './pagination.js';

let filteredFilmsPagination;
let CheckedGenreNames = [];

export async function createGenresFilter() {
  const choiceBtn = document.querySelector('.choose-genre-btn');
  const choiseFormWrapper = document.querySelector('.choice-form-wrapper');
  const choiceFormWrapperElement = document.querySelector(
    '.choice-form-wrapper__element'
  );
  const chooseBtn = document.querySelector('.chooseBtn');

  choiceBtn.addEventListener('click', openChoiceForm);

  function createChoiceElement({ id, name }) {
    return `<div> <input class="choice-form__item"
    type="checkbox"
    id="${id}"
    name="${name}"
     />
    <label for="${id}">${name}</label>
    </div>`;
  }

  function openChoiceForm() {
    clearFormMurkup();

    choiseFormWrapper.classList.remove('visually-hidden');

    chooseBtn.addEventListener('click', searchFilmsToGenres);

    createFormMarkup();
  }

  const searchFilmsToGenres = async () => {
    createFormMarkup();
    CheckedGenreNames = findCheckedGenres();
    const { data } = await fetchApi.fetchFilmsWithGenres(
      CheckedGenreNames.join(',')
    );
    galleryList.innerHTML = '';
    fetchApi.page = 1;
    renderGallery(data.results);

    filteredFilmsPagination = addPagination(data);
    filteredFilmsPagination.on('beforeMove', loadMoreFilms);

    choiseFormWrapper.classList.add('visually-hidden');
  };

  const getGenreName = async () => {
    const genreNames = await fetchApi.fillGenreList();
    return genreNames;
  };

  const createFormMarkup = async () => {
    const genreNames = await getGenreName();
    const markup = genreNames.map(createChoiceElement);
    choiceFormWrapperElement.insertAdjacentHTML('beforeend', markup.join(''));
  };

  function clearFormMurkup() {
    choiceFormWrapperElement.innerHTML = '';
  }

  function findCheckedGenres() {
    const genres = document.querySelectorAll('.choice-form__item');
    const checkedGenres = Array.from(genres).filter(genre => genre.checked);
    const checkedGenreNames = checkedGenres.map(genre => genre.id);
    return checkedGenreNames;
  }

  async function loadMoreFilms(e) {
    const currentPage = e.page;
    const { data } = await fetchApi.fetchFilmsWithGenres(
      CheckedGenreNames.join(','),
      currentPage
    );
    renderGallery(data.results);
  }
}
