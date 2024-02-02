// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

const voidArray = [""];

for (let i = 0; i < 6; i++) {

    let userNumbers = Number(prompt("Inserisci un numero"));

    if (userNumbers % 2 !== 0) {

        voidArray.push(userNumbers);

    }
}

document.getElementById(`result`).innerHTML = voidArray;