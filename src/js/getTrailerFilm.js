import * as basicLightbox from 'basiclightbox';
import { refs } from './refs';

const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
let instance;
let modalCloseBtn;

refs.galleryList.addEventListener('click', getTrailerFilm);

async function getTrailerFilm(e) {
  if (e.target === e.currentTarget) return;
  if (e.target.closest('.gallery-item-trailer')) {
    const id = e.target.closest('.photo-card').dataset.id;
    renderModalTrailler(id);
  }
}

function renderModalTrailler(id) {
  if (window.location.hash === '#ua') {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=uk-UA`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        renderCloseTrailerBtn();
      });
  } else {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-Us`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        renderCloseTrailerBtn();
      });
  }
}

function renderCloseTrailerBtn() {
  const modalBox = document.querySelector('.basicLightbox--iframe');
  modalBox.insertAdjacentHTML('afterbegin', trailerModalTemplate);
  modalCloseBtn = document.querySelector('[data-action="close-lightbox"]');
  modalCloseBtn.addEventListener('click', closeTrailerModal);
}

function closeTrailerModal() {
  instance.close();
  modalCloseBtn.removeEventListener('click', closeTrailerModal);
}

const trailerModalTemplate = `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        ></button>
    `;
