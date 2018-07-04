let speed;
let bar;
let video;
let isDown = false;

function domLoaded() { 
  speed = document.querySelector('.speed');
  bar = document.querySelector('.speed-bar');
  video = document.querySelector('.flex');

  speed.addEventListener('mousedown', function(e) {
    isDown = true;
    e.preventDefault();
  });

  speed.addEventListener('mouseleave', () => {
    isDown = false;
  });

  speed.addEventListener('mouseup', () => {
    isDown = false;
  });

  speed.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = `${playbackRate.toFixed(2)}px`;
    video.playbackRate = playbackRate;
  });
}

window.addEventListener('DOMContentLoaded', domLoaded);