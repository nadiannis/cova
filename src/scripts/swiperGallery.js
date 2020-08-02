import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperGallery = new Swiper('.swiper-container-gallery', {
  slidesPerView: 1.25,
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    600: {
      slidesPerView: 2.25,
      spaceBetween: 20,
      centeredSlides: true
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: false
    }
  }
});