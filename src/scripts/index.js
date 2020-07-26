import '../styles/main.sass';

const menu = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.classList.toggle('nav-show');
});

document.addEventListener('click', e => {
  if (e.target.closest('.nav')) return; 

  nav.classList.remove('nav-show');
});