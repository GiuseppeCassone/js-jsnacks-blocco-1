// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const firstWord = prompt("Inserisci una parola");
const secondWord = prompt("Inserisci un'altra parola");

if (firstWord.length > secondWord.length) {

    document.getElementById(`longer`).innerHTML = firstWord;
    document.getElementById(`smaller`).innerHTML = secondWord;


} else {

    document.getElementById(`longer`).innerHTML = secondWord;
    document.getElementById(`smaller`).innerHTML = firstWord;
    
}
