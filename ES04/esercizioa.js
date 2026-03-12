/**
 * CALCOLATRICE DA LINEA DI COMANDO (BASILARE)
 * -------------------------------------------
 * Uso: node calc.js <numero1> <operazione> <numero2>
 * Esempio: node calc.js 10 add 5
 *
 * Questo programma legge 3 argomenti dalla linea di comando:
 * - un numero
 * - un'operazione
 * - un altro numero
 * e calcola il risultato.
 */

// ---------------------------------------------------------
// 1. process.argv contiene TUTTI gli argomenti passati a Node.
//    I primi due NON servono:
//    - [0] percorso di node
//    - [1] percorso del file .js
//    Quindi prendiamo solo da [2] in poi.
// ---------------------------------------------------------
const args = process.argv.slice(2);

// ---------------------------------------------------------
// 2. Controlliamo che l'utente abbia scritto almeno 3 argomenti.
//    Se non lo ha fatto, mostriamo un messaggio e chiudiamo.
// ---------------------------------------------------------
if (args.length < 3) {
  console.log("Errore: devi inserire <numero1> <operazione> <numero2>");
  console.log("Esempio: node calc.js 5 add 3");
  process.exit(1); // Chiude il programma
}

// ---------------------------------------------------------
// 3. Convertiamo i primi e terzi argomenti in numeri.
//    process.argv restituisce tutto come stringa.
// ---------------------------------------------------------
const n1 = Number(args[0]);
const operazione = args[1]; // lasciamo la stringa così com'è
const n2 = Number(args[2]);

// ---------------------------------------------------------
// 4. Controlliamo che n1 e n2 siano numeri validi.
//    isNaN() = true se NON è un numero.
// ---------------------------------------------------------
if (isNaN(n1) || isNaN(n2)) {
  console.log("Errore: devi inserire numeri validi.");
  process.exit(1);
}

let risultato; // qui salveremo il risultato

// ---------------------------------------------------------
// 5. Usiamo uno switch per capire quale operazione fare.
//    Supportiamo 4 operazioni base: add, sub, mul, div.
// ---------------------------------------------------------
switch (operazione) {
  case "add":
    risultato = n1 + n2;
    break;

  case "sub":
    risultato = n1 - n2;
    break;

  case "mul":
    risultato = n1 * n2;
    break;

  case "div":
    // Controllo divisione per zero
    if (n2 === 0) {
      console.log("Errore: non puoi dividere per zero.");
      process.exit(1);
    }
    risultato = n1 / n2;
    break;

  default:
    // Se l'operazione non è una di quelle previste
    console.log("Operazione non valida. Usa: add, sub, mul, div");
    process.exit(1);
}

// ---------------------------------------------------------
// 6. Stampiamo il risultato finale.
// ---------------------------------------------------------
console.log("--------------");
console.log("Risultato:", risultato);
console.log("--------------");
