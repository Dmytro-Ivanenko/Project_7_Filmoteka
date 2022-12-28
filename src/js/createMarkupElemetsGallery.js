export function createMarkupElemetsGallery(
  { id, title, poster_path, release_date, genre_ids },
  fetchApi
) {
  const genres = genre_ids
    .map(genreId => {
      return fetchApi.getGenreById(genreId);
    })
    .join(', ');

  const dateYear = new Date(release_date).getFullYear();
  let images = '';

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
  <button class="gallery-item-trailer">Дивитися трейлер</button>

  <div class="info">
    <p class="info-title">${title}</p>
    <div class="info-other">
      <p class="info-item">${genres}</p>
      <p class="info-item">${dateYear}</p>
    </div>
  </div>
</div>`;
}
