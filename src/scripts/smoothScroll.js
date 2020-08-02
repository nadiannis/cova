const smoothScroll = (target, duration) => {
  const targetElement = document.querySelector(target);
  const targetPos = targetElement.getBoundingClientRect().top;
  const startPos = window.pageYOffset || window.scrollY;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;

    let run = ease(timeElapsed, startPos, targetPos, duration);
    scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (currTime, startVal, changeInVal, timeDuration) => {
    currTime /= timeDuration;
    currTime--;
    return changeInVal * (Math.pow(currTime, 5) + 1) + startVal;
  };

  requestAnimationFrame(animation);
};

export default class SmoothScroll {
  constructor(link) {
    const target = link.getAttribute('href');

    link.addEventListener('click', e => {
      e.preventDefault();
      smoothScroll(target, 2000);
    }); 
  }
}