import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { refs } from './refs';

export function renderGallery(galleryEl) {
  const galleryElements = galleryEl.map(elem =>
    createMarkupElemetsGallery(elem, refs.fetchApi)
  );
  refs.galleryList.innerHTML = galleryElements.join('');
}
