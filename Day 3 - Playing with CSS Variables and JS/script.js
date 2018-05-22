let inputs;

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


const domLoaded = () => {
    inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener( 'change', handleUpdate));
    inputs.forEach(input => input.addEventListener( 'mousemove', handleUpdate));
}

document.addEventListener('DOMContentLoaded', domLoaded);
