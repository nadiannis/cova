export default class Nav {
  constructor(btn) {
    const nav = document.querySelector('.nav');

    btn.addEventListener('click', () => {
      this.toggleNav(nav);
    });

    window.addEventListener('scroll', () => {
      this.removeNavOnScroll(nav);
    });

    document.addEventListener('click', e => {
      this.removeNavOnClickOutside(nav, e);
    });
  }

  toggleNav(nav) {
    nav.classList.toggle('nav-show');
  }

  removeNav(nav) {
    nav.classList.remove('nav-show');
  }

  removeNavOnScroll(nav) {
    if (nav.classList.contains('nav-show') && window.pageYOffset > 0) {
      this.removeNav(nav);
    }
  }

  removeNavOnClickOutside(nav, event) {
    if (event.target.closest('.nav')) {
      if (event.target.className === 'nav-link') {
        this.removeNav(nav);
      } else {
        return;
      }
    }
    this.removeNav(nav);
  }
}