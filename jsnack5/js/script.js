// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.

const userNumber = Number(prompt("Inserisci un numero"));

const resultsCube = document.getElementById(`result`);

for (let i = 1; i <= userNumber; i++) {

     const cubeNumber = i * i * i;
     resultsCube.innerHTML += cubeNumber;
    
}