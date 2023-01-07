import { createMarkupElemetsGallery } from './createMarkupElemetsGallery';
import { refs } from './refs';
import { changeLanguage } from './translate';
import { loader, loaderRemove } from './loader';




export function renderGallery(galleryEl) {
  setTimeout(() => {
   if(!refs.galleryList.innerHTML){
   loader(); 
   }
  }, 1500);

  const galleryElements = galleryEl.map(elem =>
  createMarkupElemetsGallery(elem, refs.fetchApi)
  );
  refs.galleryList.innerHTML = galleryElements.join('');
loaderRemove();
}
