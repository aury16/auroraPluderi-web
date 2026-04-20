// Importiamo la libreria per leggere input da tastiera
const prompt = require("prompt-sync")();

/*
    FUNZIONE RICHIESTA
    prende un numero intero e restituisce le cifre invertite
*/
function inverti_cifre(numero) {

    // trasformo il numero in stringa
    let testo = numero.toString();

    // separo le cifre
    let array = testo.split("");

    // inverto le cifre
    array = array.reverse();

    // ricompongo
    let invertito = array.join("");

    // restituisco il risultato (come numero)
    return parseInt(invertito);
}

/*
    PROGRAMMA PRINCIPALE
*/

// chiedo il numero all’utente
let num = prompt("Inserisci un numero intero: ");

// conversione a numero intero
num = parseInt(num);

// controllo validità
if (isNaN(num)) {
    console.log("Errore: devi inserire un numero valido!");
} else {

    // chiamo la funzione
    let risultato = inverti_cifre(num);

    // output
    console.log("Numero invertito:", risultato);
}
