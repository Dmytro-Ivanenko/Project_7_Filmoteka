import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const backdrop = document.querySelector('.students-backdrop');

export function toggleModal() {
  backdrop.classList.toggle('is-hidden');

  if (!backdrop.classList.contains('is-hidden')) {
    new Swiper('.swiper', {
      speed: 400,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }
}

export function closeModalOnBackdropClick(event) {
  if (event.target === backdrop) {
    backdrop.classList.add('is-hidden');
  }
}
