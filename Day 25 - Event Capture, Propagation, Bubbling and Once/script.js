let divs;

function logText(e) {
  console.log(this.classList.value);
  // stop bubbling
  e.stopPropagation();
}

function domLoaded() {
  divs = document.querySelectorAll('div');
  divs.forEach(div => div.addEventListener('click', logText, {
    capture: false
    ,once: true // the event happen once
  }));
}

window.addEventListener('DOMContentLoaded', domLoaded);