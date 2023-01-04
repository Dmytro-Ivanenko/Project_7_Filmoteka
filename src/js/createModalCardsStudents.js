import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const backdrop = document.querySelector('.students-backdrop');
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  speed: 1000,
  spaceBetween: 100,
  slidesPerView: 3,
  spaceBetween: 2,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    enabled: true,
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
});

export function toggleModal() {
  backdrop.classList.toggle('is-hidden');

  if (!backdrop.classList.contains('is-hidden')) {
    swiper.update();
  }
}

export function closeModalOnBackdropClick(event) {
  if (event.target === backdrop) {
    backdrop.classList.add('is-hidden');
  }
}
