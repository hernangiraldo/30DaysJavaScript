const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
let p;

function loaded() {
    p = document.querySelector('p');
    console.dir(p);
}

function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//Regular
console.log('hello');

//Interpolated
console.log( 'Hello, I\'m %s', 'Poop'  );

//Styled
console.log('%c Prueba', 'font-size: 30px; color: red');

//Warning
console.warn( 'Ésta es una alerta' );

//Error
console.error( 'Fuck!' );

//Info
console.info('Infooooo...');

//Testing
console.assert( 1 === 2, 'Testing' );

//Clearing
console.clear();

//Viewing DOM Element -> Uses in loaded function console.dir()

//Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
        console.log(`He is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');

//timing
console.time('fetching data')

document.addEventListener('DOMContentLoaded', loaded);