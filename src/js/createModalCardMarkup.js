import * as basicLightbox from 'basiclightbox';

// const modalBtnClose = document.querySelector('.modal-btn-close');

export function createModalCardMarkup(data) {
  const {
    title,
    poster_path,
    genres,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = data;

  const genresName = genres
    .map(genreId => {
      return genreId.name;
    })
    .join(', ');

  return `
    <div class="modal">
        <div class="modal-card">
            <button class="modal__btn-close" data-modal-close>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            class="modal__icon-close"
            width="24" height="24"
            viewBox="0 0 24 24">
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
            </button>
            <div class="modal-card__images">
                <img
                class="modal-card__image"
                src="https://image.tmdb.org/t/p/w1280/${poster_path}"
                alt="Title"
                />
            </div>
            <div class="modal-card__description">
                <h2 class="modal-card__title">${title}</h2>
                <table class="modal-card__table">
                <tbody>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Vote / Votes</td>
                    <td class="modal-card__table-data"><span>${vote_average}</span> / ${vote_count}</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Popularity</td>
                    <td class="modal-card__table-data">${popularity}</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Original Title</td>
                    <td class="modal-card__table-data">${original_title}</td>
                    </tr>
                    <tr class="modal-card__table-row">
                    <td class="modal-card__table-data modal-card__table-data--grey">Genre</td>
                    <td class="modal-card__table-data">${genresName}</td>
                    </tr>
                </tbody>
                </table>
                <p class="modal-card__about">About</p>
                <p class="modal-card__about-description">${overview}</p>
                <div class="modal-card__btn">
                    <button class="modal-card__btn-watched">add to Watched</button>
                    <button class="modal-card__btn-queue">add to queue</button>
                </div>
            </div>
        </div>
    </div>
`;
}
