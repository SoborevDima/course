console.log('Hello, from app.js');

const x = 100 * 5 + 10 - 200;
const y = x + 100

console.log(x, y);

const firstName = 'Liana';
const lastName = 'Arutunian';

let age = 32;

age = 42;

let myFavoriteMovie = 'Patriot';
const birthYear = 2004;
let isDeveloper = false;



const spainCapital = 'Valencia';
let isCorrectAnswer;

// Конструкция if..else

if (spainCapital === 'Madrid') {
    isCorrectAnswer = true;
} else if (spainCapital === 'madrid') {
    isCorrectAnswer = true;
} else if (spainCapital === 'MADRID') {
    isCorrectAnswer = true;
} else {
    isCorrectAnswer = false;
}

//Крнструкция switch

switch (spainCapital) {
    case 'Madrid':
    case 'madrid':
    case 'MADRID':
        isCorrectAnswer = true;
        break;
    default:
        isCorrectAnswer = false;
}

const a = 1;
const b = 2;
let result;

if (a + b < 4) {
    result = 'Мало';
} else {
    result = 'Много';
}

//Тернарный оператор 
console.log ('result', a + b < 4 ? 'мало' : 'много');
