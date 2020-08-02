import Swiper, { Pagination, Autoplay } from 'swiper';

Swiper.use([Pagination, Autoplay]);

const swiperTesti = new Swiper('.swiper-container-testimonial', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});