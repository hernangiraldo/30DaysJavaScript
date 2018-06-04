let sliderImages;

const debounce = (func, wait = 20, immediate = true) => {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  sliderImages.forEach(image => {
    const slideInAt = (window.scrollY + window.innerHeight);
    const imageBottom = image.offsetTop + image.height;
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.screenY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

const domLoaded = () => {
  sliderImages = document.querySelectorAll('.slide-in');
};

window.addEventListener('scroll', debounce(checkSlide));
document.addEventListener('DOMContentLoaded', domLoaded);