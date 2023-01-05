export function createMarkupElemetsGallery(
  { id, title, poster_path, release_date, genre_ids, vote_average, genres },
  fetchApi
) {
  const dateYear = new Date(release_date).getFullYear();
  let images = '';

  let formattedGenres;

  if (genre_ids) {
    formattedGenres = getGenresForMarkup(genre_ids, fetchApi);
  }

  if (genres) {
    formattedGenres = genres.map(genre => {
      return genre.name;
    });
    if (formattedGenres.length > 2) {
      formattedGenres = formattedGenres.slice(0, 2).join(', ') + ', Other';
    }
  }

  if (!poster_path) {
    images =
      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  } else {
    images = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  }

  return `<div class="photo-card"
  data-id=${id}
  >
  <a class="gallery__item">
    <img
      class="gallery__image"
      loading="lazy"
      src="${images}"
      alt="${title}"
    />
  </a>
  <button class="gallery-item-trailer">
  <svg class="gallery-item-trailer-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
  class="modal__icon-close"
  viewBox="0 0 32 32">
  <path d="M23.796 14.282l-9.309-6.761c-0.646-0.469-1.501-0.536-2.212-0.174s-1.159 1.094-1.159 1.892v13.523c0 0.799 0.448 1.529 1.159 1.892 0.304 0.155 0.635 0.232 0.964 0.232 0.44 0 0.878-0.137 1.248-0.405l9.309-6.761c0.55-0.399 0.875-1.038 0.875-1.718s-0.325-1.319-0.875-1.718z"></path>
  <path d="M16 0c-8.823 0-16 7.178-16 16s7.177 16 16 16c8.822 0 16-7.178 16-16s-7.177-16-16-16zM16 28.068c-6.654 0-12.068-5.414-12.068-12.068s5.414-12.068 12.068-12.068 12.068 5.414 12.068 12.068c-0 6.654-5.414 12.068-12.068 12.068z"></path>
 </svg>
</symbol>
  </button>

  <div class="info">
    <p class="info-title">${title}</p>
    <div class="info-other">
      <span class="info-vote-average">${vote_average.toFixed(1)}</span>
      <p class="info-item">${formattedGenres}</p>
      <p class="info-item">${dateYear}</p>
    </div>
  </div>
</div>`;
}

function getGenresForMarkup(genresId, fetchApi) {
  if (genresId.length > 2) {
    return (
      genresId
        .slice(0, 2)
        .map(genreId => {
          return fetchApi.getGenreById(genreId);
        })
        .join(', ') + ', Other'
    );
  }

  return genresId
    .map(genreId => {
      return fetchApi.getGenreById(genreId);
    })
    .join(', ');
}
