export default class Preloader {
  constructor(loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hideLoader(loader);
      }, 600);
    });
  }

  hideLoader(element) {
    element.classList.add('hide');
  }
}