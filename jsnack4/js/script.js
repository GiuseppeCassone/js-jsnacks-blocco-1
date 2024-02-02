// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt("Inserisci un numero a 4 cifre");

if (userNumber.length === 4) {

    let sum = 0;

    for(let i = 0; i < userNumber.length; i++) {

        sum += +userNumber[i];
    }

    document.getElementById(`result`).innerHTML = sum;

} else {

    document.getElementById(`result`).innerHTML = "Non hai inserito il numero di cifre giuste!"
}