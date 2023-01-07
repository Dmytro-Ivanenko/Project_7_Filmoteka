import * as basicLightbox from 'basiclightbox';

document.addEventListener('click', getTrailerFilm);

async function getTrailerFilm(e) {
  const { value } = e.target.classList;

  if (
    value === 'gallery-item-trailer-icon' ||
    value === 'gallery-item-trailer'
  ) {
    e.stopPropagation();
    renderModalTrailler(e.path[1].dataset.id);

    function renderModalTrailler(id) {
      if (window.location.hash === '#ua') {
        const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=uk-UA`;
       
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const id = data.results[0].key;
          const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
          instance.show();
          btnCloseModalTrailler(instance);
        })
        .catch(() => {
          const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/RDuzj5VHxHi7M' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

          instance.show();
          btnCloseModalTrailler(instance);
        });
      } else {
        const API_KEY = '53f2c47317a563cd2628c68ceb6a6673';
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
       
      fetch(url)
        .then(response => response.json())
        .then(data => {
          const id = data.results[0].key;
          const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
          instance.show();
          btnCloseModalTrailler(instance);
        })
        .catch(() => {
          const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/RDuzj5VHxHi7M' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

          instance.show();
          btnCloseModalTrailler(instance);
        });
      }
      
    }

    function btnCloseModalTrailler(instance) {
      const modalBox = document.querySelector('.basicLightbox--iframe');
      modalBox.insertAdjacentHTML(
        'afterbegin',
        `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        ></button>
    `
      );
      const modalCloseBtn = document.querySelector(
        '[data-action="close-lightbox"]'
      );
      modalCloseBtn.addEventListener('click', () => instance.close());
    }
  }
}
