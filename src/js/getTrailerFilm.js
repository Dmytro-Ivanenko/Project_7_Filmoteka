import * as basicLightbox from 'basiclightbox';

import { refs } from './refs';
import { getTrailerYouTube } from './api';

export async function getTrailerFilm(e) {
  const id = e.path[1].dataset.id;
  const { value } = e.target.classList;

  if (value !== 'gallery-item-trailer-icon') {
    return;
  }
  movie = await refs.fetchApi.getTrailer(id);
  const { key } = movie.data.results[0];
  console.log(key);
  //   yotubeMovie = getTrailerYouTube(key);
  // yotubeMovie.then(resp => console.log(resp));

  const instance = basicLightbox.create(`
    <iframe src="https://www.youtube.com/embed/${key}" width="560" height="315" frameborder="0"></iframe>
`);
  instance.show();
}
