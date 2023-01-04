export function createElementsUpcoming({ id, title, poster_path }) {
  let images = '';

  if (!poster_path) {
    images =
      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  } else {
    images = `https://image.tmdb.org/t/p/w1280${poster_path}`;
  }

  return `<li class="glide__slide" 
  
  >
  <a class="upcoming__item" data-id=${id}>
    <img
      class="upcoming__image"
      loading="lazy"
      src="${images}"
      alt="${title}"
    />
  </a>
</li>`;
}
