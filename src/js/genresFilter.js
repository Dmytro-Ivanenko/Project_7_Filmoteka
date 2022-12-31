// import Choices from 'choices.js';
// import '../../node_modules/choices.js/public/assets/styles/choices.min.css';

export async function createGenresFilter() {
  const choiceBtn = document.querySelector('.choose-genre-btn');
  choiceBtn.addEventListener('click', openChoiceForm);
  const choiseForm = document.querySelector('.choose-genre');

  function createChoiceForm() {
    return `
    <div class="choice-form-wrapper">
        <form class = "choice-form-wrapper__element" >
        <ul class="choice-form">
        <li class="choice-form__item">
            <input
            type="checkbox"
            id="genreType"
            name="genreName"
             />
          <label for="genreType">GENRE TYPE</label>
        </li>
        <li>
            <input
            type="checkbox"
            id="genreType"
            name="genreName"
             />
          <label for="genreType">GENRE TYPE</label>
        </li>
        </ul>
        </form>
        <div class="choice-form-wrapper__btn">
          <button class="chooseBtn" type="submit">CHOOSE</button>
        </div>
    </div>`;
  }

  function openChoiceForm() {
    const choiseFormWrapper = document.querySelector('.choice-form-wrapper');

    if (choiseFormWrapper) {
      choiseFormWrapper.classList.remove('visually-hidden');
    } else {
      choiseForm.insertAdjacentHTML('beforeend', createChoiceForm());
    };
    const chooseBtn = document.querySelector('.chooseBtn')
    chooseBtn.addEventListener('click', searchFilmsToGenres);
  }

  function searchFilmsToGenres(){
    const choiseFormWrapper = document.querySelector('.choice-form-wrapper');
    choiseFormWrapper.classList.add('visually-hidden');
  }
}
