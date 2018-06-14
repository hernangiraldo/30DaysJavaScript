let video;
let canvas;
let strip;
let snap;
let ctx;

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then( localMediaStream => {
            video.src = window.URL.createObjectURL(localMediaStream);
            video.play();
        }). catch( err => {
            console.log('Nooooo!!!', err);
        });
}

function redEffect(pixels) {
    for(let i=0 ; i < pixels.data.length; i+=4) {
        pixels[i + 0] = pixels.data[i + 0] + 100;
        pixels[i + 1] = pixels.data[i + 1] - 50;
        pixels[i + 2] = pixels.data[i + 2] * 0.5;
    }

    return pixels;
}

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval( () => {
        ctx.drawImage(video, 0, 0, width, height);
        let pixels = ctx.getImageData(0, 0, width, height);
        pixels = redEffect(pixels);
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome man"/>`;
    strip.insertBefore(link, strip.firstChild);
}

function domLoaded() {
    video = document.querySelector('.player');
    canvas = document.querySelector('.photo');
    ctx = canvas.getContext('2d');
    strip = document.querySelector('.strip');
    snap = document.querySelector('.snap');

    getVideo();

    video.addEventListener('canplay', paintToCanvas);
}

document.addEventListener('DOMContentLoaded', domLoaded);