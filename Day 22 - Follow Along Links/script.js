let triggers;
let highlight;

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.screenY,
    bottom: linkCoords - window.screenY,
    left: linkCoords.top + window.screenY,
    right: linkCoords.top - window.screenY
  };
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.top = `${linkCoords.top}px`;
  highlight.style.bottom = `${linkCoords.bottom}px`;
  highlight.style.right = `${linkCoords.right}px`;
  highlight.style.left = `${linkCoords.left}px`;
}

function domLoaded() {
  triggers = document.querySelectorAll('a');
  highlight = document.createElement('span');
  highlight.classList.add('highlight');
  document.body.appendChild(highlight);

  triggers.forEach( a => {
    a.addEventListener('mouseenter', highlightLink);
  })
}

document.addEventListener('DOMContentLoaded', domLoaded);