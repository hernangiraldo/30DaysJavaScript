let hero;
let text;

function shadow(e) {
    const { offsetWidth: width , offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y  } = e;
    const walk = 100;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWlak = Math.round((x / width * walk) - (walk / 2));
    const yWlak = Math.round((y / width * walk) - (walk / 2));

    text.style.textShadow = `
        ${xWlak}px ${yWlak}px 0 rgba(255, 0, 255, 0.7),
        ${xWlak * -1}px ${yWlak * -1}px 0 rgba(0, 255, 255, 0.7)`;
}

function domLoaded() {
    hero = document.querySelector('.hero');
    text = hero.querySelector('h1');

    hero.addEventListener( 'mousemove', shadow);
}

document.addEventListener('DOMContentLoaded', domLoaded);