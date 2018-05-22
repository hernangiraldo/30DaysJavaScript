let secondHand;
let minHand;
let hourHand;

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegrees = ( (second / 60) * 360 ) + 90;
    secondHand.style.transform = 'rotate(' + secondDegrees + 'deg)';

    const min = now.getMinutes();
    const minDegrees = ( (min / 60) * 360 ) + 90;
    minHand.style.transform = 'rotate(' + minDegrees + 'deg)';

    const hour = now.getHours();
    const hourDegrees = ( (hour / 60) * 360 ) + 90;
    hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';
}

function start() {
    secondHand = document.querySelector('.second');
    minHand = document.querySelector('.minute');
    hourHand = document.querySelector('.hour');

    setInterval( () => {
        setDate();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', start);