export default class Navbar {
  constructor() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > hero.offsetHeight - header.offsetHeight) {
        this.addBackground(header);
      } else {
        this.removeBackground(header);
      }
    
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (window.pageYOffset > hero.offsetHeight + header.offsetHeight) {
        const top = (scrollTop > lastScrollTop) ? '-110px' : '0';
        this.modifyTop(header, top);
        lastScrollTop = scrollTop;
      } else {
        this.modifyTop(header, '0');
      }
    });
  }

  addBackground(header) {
    header.classList.add('background');
  }

  removeBackground(header) {
    header.classList.remove('background');
  }

  modifyTop(header, val) {
    header.style.top = val;
  }
}