let canvas;;
let ctx;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const domLoaded = () => {
    canvas = document.querySelector('#draw');
    ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.strokeStyle = '#bada55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = hue;

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}

function draw(e) {
    if ( !isDrawing ) return;

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    
    hue++;
    hue = hue >= 360 ? 0 : hue;

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }

    if ( direction ) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }


    [lastX, lastY] = [e.offsetX, e.offsetY];
}

document.addEventListener('DOMContentLoaded', domLoaded);
