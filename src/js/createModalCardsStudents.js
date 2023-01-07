import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const body = document.querySelector('body');
const backdrop = document.querySelector('.students-backdrop');
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 1000,
  

  
  breakpoints: {
   // when window width is >= 320px
    767: {
      slidesPerView: 1,
    },
   // when window width is >= 768px
   1023: {
      slidesPerView: 2,

    },
     // when window width is >= 1280px
    1300: {
      slidesPerView: 3,
    }
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
    body.classList.add('scroll-ban')
  } else{
    body.classList.remove('scroll-ban')
  }
}

export function closeModalOnBackdropClick(event) {
  if (event.target === backdrop) {
    backdrop.classList.add('is-hidden');
    body.classList.remove('scroll-ban')
  }
}
