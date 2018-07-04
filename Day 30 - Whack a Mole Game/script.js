let holes;
let scoreBoard;
let moles;
let bkg;
let btn;
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if(lastHole === hole) {
    randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  let interval = setTimeout( () => {
    hole.classList.remove('up');
    if(!timeUp) {
      peep();
      clearInterval(interval);
    }
  }, time);
}

function startGame() {
  scoreBoard.texContent = 0;
  timeUp = false;
  score = 0;
  bkg.style.display = 'none';
  peep();

  setTimeout(() => {
    timeUp = true;
    bkg.style.display = 'flex';
    btn.textContent = 'Start again!';
  }, 10000);
}

function bonk(e) {
  if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

function domLoaded() { 
  holes = document.querySelectorAll('.hole');
  scoreBoard = document.querySelector('.score');
  moles = document.querySelectorAll('.mole');
  bkg = document.querySelector('.bkg-start-button');
  btn = document.querySelector('.start-button');

  moles.forEach( mole => mole.addEventListener('click', bonk))
}

window.addEventListener('DOMContentLoaded', domLoaded);