import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const backdrop = document.querySelector('.students-backdrop');
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
  speed: 1000,
  // spaceBetween: 1,
  
  // slidesPerView: 3,

  

  // slidesPerView: 1,
  // spaceBetween: 100,
  breakpoints: {
   // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 2
    },
   // when window width is >= 768px
   768: {
      slidesPerView: 2,
      // spaceBetween: 3
    },
     // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      // spaceBetween: 4
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
  }
}

export function closeModalOnBackdropClick(event) {
  if (event.target === backdrop) {
    backdrop.classList.add('is-hidden');
  }
}
