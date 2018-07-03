let arrow;
let speed;

function domLoaded() {
  arrow = document.querySelector('.arrow');
  speed = document.querySelector('.speed-value');

  navigator.geolocation.watchPosition( 
    data => {
      speed.textContent = data.coords.speed;
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    err => {
      console.log(err);
    }
  );
}

document.addEventListener('DOMContentLoaded', domLoaded);