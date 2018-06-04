let panels;

const closeOpened = () => {
    let temp = document.querySelector('.open');
    let toggle = false;
    if (temp) {
        temp.classList.remove('open');
        toggle = true;
    }
    return toggle;
}

function toggleOpen() {
    let toggle = closeOpened();
    if (!toggle) {
        this.classList.toggle('open');
    }
}

function toggleActive(e) {
    if ( e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }

}

domLoaded = () => {
    panels = document.querySelectorAll('.panel');

    panels.forEach( panel => {
        panel.addEventListener('click', toggleOpen);
        panel.addEventListener('transitionend', toggleActive);
    });
}

document.addEventListener('DOMContentLoaded', domLoaded);