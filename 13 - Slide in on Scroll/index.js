

// debounce function taken from: https://davidwalsh.name/javascript-debounce-function
// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// ES6 version taken from: https://medium.com/@TCAS3/debounce-deep-dive-javascript-es6-e6f8d983b7a1
const debounce = (fn, time) => {
  let timeout;

  return function(...args) {
    const functionCall = () => fn.apply(this, args);
    
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

const sliderImages = document.querySelectorAll('.slide-in');

const checkSlide = event => {
  console.log(event);
  sliderImages.forEach(sliderImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide, 20));