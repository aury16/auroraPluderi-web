// Importiamo la libreria per leggere input da tastiera
const prompt = require("prompt-sync")();

// Chiediamo all'utente il primo numero
let numero1 = prompt("Inserisci il primo numero: ");

// Chiediamo all'utente il secondo numero
let numero2 = prompt("Inserisci il secondo numero: ");

// Chiediamo l'operazione
let operazione = prompt("Inserisci l'operazione (+, -, *, /, **): ");

// Convertiamo i valori da stringa a numero
numero1 = Number(numero1);
numero2 = Number(numero2);

// Controlliamo se i numeri sono validi
if (isNaN(numero1) || isNaN(numero2)) {
    // Se almeno uno non è un numero
    console.log("Errore: devi inserire numeri validi");
} else {

    // Controlliamo l'operazione scelta

    if (operazione === "+") {
        // Somma
        let risultato = numero1 + numero2;
        console.log("Il risultato è:", risultato);

    } else if (operazione === "-") {
        // Sottrazione
        let risultato = numero1 - numero2;
        console.log("Il risultato è:", risultato);

    } else if (operazione === "*") {
        // Moltiplicazione
        let risultato = numero1 * numero2;
        console.log("Il risultato è:", risultato);

    } else if (operazione === "/") {
        // Divisione
        if (numero2 === 0) {
            // Controllo divisione per zero
            console.log("Errore: divisione per zero");
        } else {
            let risultato = numero1 / numero2;
            console.log("Il risultato è:", risultato);
        }

    } else if (operazione === "**") {
        // Potenza
        let risultato = numero1 ** numero2;
        console.log("Il risultato è:", risultato);

    } else {
        // Operazione non valida
        console.log("Errore: operazione non valida");
    }
}
