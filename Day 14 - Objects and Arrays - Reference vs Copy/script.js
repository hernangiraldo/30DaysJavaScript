// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'HD';
let name2 = name;
console.log(name, name2);
name = 'Gi';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);
team[3] = 'Lux';
console.log(players, team);

// You might think we can just do something like this:
const team2 = players.slice();
console.log(players, team2);
team2[3] = 'Test';
console.log(players, team2);


// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
team3[3] = 'Test3';
console.log(players, team3);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'Test4';
console.log(players, team4);

const team5 = Array.from(players);
team5[3] = 'Test5';
console.log(players, team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:
const captain = person;
captain.number = 19;
console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, players, { weigth: 89, age: 25 });
console.log(person, cap2);

// We will hopefully soon see the object ...spread
//const cap3 = {...person}; EC6

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const hg = {
  name: 'HG',
  age: 29,
  social: {
    twitter: '@hernan__giraldo',
    facebook: 'hernangiraldo89'
  }
}
// Problem!!! Only one level depp
const cap3 = Object.assign({}, hg);
cap3.social.twitter = '@new';
console.log(hg, cap3);

// Bad solution
const cap4 = JSON.parse(JSON.stringify(hg));
cap4.social.twitter = '@new4';
console.log(hg, cap4);