// Calcola la somma e la media dei primi 10 numeri.
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for(let i = 0; i < arrayNumbers.length; i++) {

    sum += arrayNumbers[i];

}

const mediaNumbers = sum / arrayNumbers.length;

document.getElementById(`sum`).innerHTML = sum;
document.getElementById(`media`).innerHTML = mediaNumbers;
