let nav;
let topOfNav;

function fixNav() {
  if(window.scrollY >= topOfNav) {
    nav.classList.add('fix-nav');
  } else {
    nav.classList.remove('fix-nav')
  }
}

function domLoaded() {
  nav = document.querySelector('#main');
  topOfNav = nav.offsetTop;
}

window.addEventListener('DOMContentLoaded', domLoaded);
window.addEventListener('scroll', fixNav);