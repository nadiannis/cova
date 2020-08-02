import '../styles/main.sass';
import '../images/icons/favicon.ico';
import './swiperGallery';
import './swiperTesti';
import './parallax';
import './scrollAnimation';
import Nav from './nav';
import Navbar from './navbar';
import SmoothScroll from './smoothScroll';


/*** Navigation ***/
const menu = document.querySelector('.menu-btn');
new Nav(menu);

/*** Smooth Scroll ***/
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(navLink => {
  new SmoothScroll(navLink);
});

/*** Animated Sticky Navbar ***/
new Navbar();