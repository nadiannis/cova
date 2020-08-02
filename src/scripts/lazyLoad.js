const preloadImage = img => {
  const src = img.getAttribute('data-src');
  if (!src) return; 

  img.src = src;
  if (img.classList.contains('img-blur')) {
    img.classList.remove('img-blur');
  }
};

const imgOptions = {
  root: null,
  threshold: 0
};

export const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);