import { fetchApi } from '../index.js';
import { createModalCardMarkup } from './createModalCardMarkup';

export async function onCardClick(e) {
  if (e.path[2].className !== 'photo-card') {
    return;
  }

  if (e.path[2].className === 'photo-card') {
    id = e.path[2].dataset.id;
    const { data } = await fetchApi.getFilmToId(id);
    createModalCardMarkup(data).show();
  }
}
