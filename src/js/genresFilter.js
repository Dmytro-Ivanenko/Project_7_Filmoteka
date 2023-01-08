import { refs } from './refs';
import { renderGallery } from './renderGallery.js';
import { addPagination } from './pagination.js';
import { renderTrendingFilms } from './renderTrendingFilms';
import Notiflix from 'notiflix';

let filteredFilmsPagination;
export let checkedGenreNames = [];

// document.addEventListener('DOMContentLoaded', createGenresFilter);

export async function createGenresFilter() {
  const choiceBtn = document.querySelector('.choose-genre-icon');
  const choiceFormWrapper = document.querySelector('.choice-form-wrapper');
  const choiceFormWrapperElement = document.querySelector(
    '.choice-form-wrapper__element'
  );
  const chooseBtn = document.querySelector('.chooseBtn');

  choiceBtn.addEventListener('click', openChoiceForm);

  // open filter
  async function openChoiceForm() {
    clearFormMurkup();

    choiceFormWrapper.classList.remove('visually-hidden');

    await createFormMarkup();
    choiceBtn.removeEventListener('click', openChoiceForm);
    choiceBtn.addEventListener('click', closeChoiceForm);
    chooseBtn.addEventListener('click', searchFilmsToGenres);
    document.addEventListener('click', closeChoiceForm);
  }

  // close filter
  function closeChoiceForm(event) {
    if (
      event.target !== choiceFormWrapper &&
      event.target !== choiceBtn &&
      event.target.parentElement.parentElement !== choiceFormWrapper &&
      event.target.parentElement.parentElement.parentElement !==
        choiceFormWrapper
    ) {
      choiceFormWrapper.classList.add('visually-hidden');
      choiceBtn.removeEventListener('click', closeChoiceForm);
      document.removeEventListener('click', closeChoiceForm);
      choiceBtn.addEventListener('click', openChoiceForm);
    }
  }

  const searchFilmsToGenres = async () => {
    refs.loadMoreGenreBtn.classList.remove('visually-hidden');
    refs.loadMoreTrend.classList.add('visually-hidden');
    refs.loadMoreSearchBtn.classList.add('visually-hidden');

    checkedGenreNames = findCheckedGenres();
    if (checkedGenreNames.length == 0) {
      Notiflix.Notify.failure('You have not selected a movie genre');
      renderTrendingFilms();
      closeChoiceForm();
    } else {
      const { data } = await refs.fetchApi.fetchFilmsWithGenres(
        checkedGenreNames.join(',')
      );
      refs.galleryList.innerHTML = '';
      refs.fetchApi.page = 1;
      renderGallery(data.results);

      filteredFilmsPagination = addPagination(data, 1);
      filteredFilmsPagination.on('beforeMove', loadMoreFilms);

      closeChoiceForm();
    }
  };

  const getGenreName = async () => {
    const genreNames = await refs.fetchApi.fillGenreList();
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
    const { data } = await refs.fetchApi.fetchFilmsWithGenres(
      checkedGenreNames.join(','),
      currentPage
    );
    renderGallery(data.results);
  }
}

createGenresFilter();
