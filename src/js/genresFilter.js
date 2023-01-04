import { galleryList, fetchApi } from '../index.js';
import { renderGallery } from './renderGallery.js';
import { addPagination } from './pagination.js';
import {renderTrendingFilms} from './renderTrendingFilms';
import Notiflix from 'notiflix';

let filteredFilmsPagination;
let checkedGenreNames = [];

export async function createGenresFilter() {
  const choiceBtn = document.querySelector('.choose-genre-btn');
  const choiseFormWrapper = document.querySelector('.choice-form-wrapper');
  const choiceFormWrapperElement = document.querySelector(
    '.choice-form-wrapper__element'
  );
  const chooseBtn = document.querySelector('.chooseBtn');

  choiceBtn.addEventListener('click', openChoiceForm);

  function openChoiceForm() {
    clearFormMurkup();

    choiseFormWrapper.classList.remove('visually-hidden');

    choiceBtn.removeEventListener('click', openChoiceForm);
    choiceBtn.addEventListener('click', closeChoiceForm);

    chooseBtn.addEventListener('click', searchFilmsToGenres);

    createFormMarkup();
  }

  function closeChoiceForm() {
    choiseFormWrapper.classList.add('visually-hidden');
    choiceBtn.removeEventListener('click', closeChoiceForm);
    choiceBtn.addEventListener('click', openChoiceForm);
  }

  window.onclick = function (event) {
    if (
      event.target !== choiseFormWrapper &&
      event.target !== choiceBtn &&
      event.target.parentElement.parentElement !== choiseFormWrapper &&
      event.target.parentElement.parentElement.parentElement !==
        choiseFormWrapper
    ) {
      closeChoiceForm();
    }
  };

  const searchFilmsToGenres = async () => {
    checkedGenreNames = findCheckedGenres();
    if (checkedGenreNames.length == 0) {
      Notiflix.Notify.failure('You have not selected a movie genre');
      renderTrendingFilms();
      closeChoiceForm();
    } else {
      const { data } = await fetchApi.fetchFilmsWithGenres(
        checkedGenreNames.join(',')
      );
      galleryList.innerHTML = '';
      fetchApi.page = 1;
      renderGallery(data.results);

      filteredFilmsPagination = addPagination(data);
      filteredFilmsPagination.on('beforeMove', loadMoreFilms);

      closeChoiceForm();
    }
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

  function createChoiceElement({ id, name }) {
    let isChecked = '';
    const idAsString = id.toString();
    if (checkedGenreNames.includes(idAsString)) {
      isChecked = 'checked';
    }

    return `<div> <input class="choice-form__item"
    ${isChecked}
    
    type="checkbox"
    id="${id}"
    name="${name}"
     />
    <label for="${id}">${name}</label>
    </div>`;
  }

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
      checkedGenreNames.join(','),
      currentPage
    );
    renderGallery(data.results);
  }
}
