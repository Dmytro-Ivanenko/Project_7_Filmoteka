import { fetchApi } from '../index.js';

export async function createGenresFilter() {
  const choiceBtn = document.querySelector('.choose-genre-btn');
  const choiseFormWrapper = document.querySelector('.choice-form-wrapper');
  const choiceFormWrapperElement = document.querySelector('.choice-form-wrapper__element');
  const chooseBtn = document.querySelector('.chooseBtn');

  choiceBtn.addEventListener('click', openChoiceForm);
  

  function createChoiceElement({name}) {
    return `<div> <input class="choice-form__item"
    type="checkbox"
    id="genreType"
    name="genreName"
     />
    <label for="genreType">${name}</label>
    </div>`
  }

  
  function openChoiceForm() {
    clearFormMurkup();

    choiseFormWrapper.classList.remove('visually-hidden');

    chooseBtn.addEventListener('click', searchFilmsToGenres);
    
    createFormMarkup();
  }

  function searchFilmsToGenres() {
    createFormMarkup();
    choiseFormWrapper.classList.add('visually-hidden');
  }

  const getGenreName = async () => {
    const genreNames = await fetchApi.fillGenreList();
    return genreNames;
  };

  const createFormMarkup = async () => {
    const genreNames = await getGenreName();
    const markup = genreNames.map(createChoiceElement);
    choiceFormWrapperElement.insertAdjacentHTML('beforeend', markup.join(''));
  }

  function clearFormMurkup() {
    choiceFormWrapperElement.innerHTML = '';
  }
}
