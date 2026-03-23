// Creo un oggetto chiamato "libro" con le proprietà richieste
let libro = {
  titolo: "Il piccolo principe", // Titolo del libro
  autore: "Antoine de Saint-Exupéry", // Nome dell'autore
  anno: 1943, // Anno di pubblicazione
  genere: "Fiaba", // Genere letterario
  pagine: 96 // Numero di pagine
};

// Uso un ciclo for...in per scorrere tutte le proprietà dell'oggetto
for (let chiave in libro) {
  // Stampo il nome della proprietà e il suo valore
  console.log(chiave + " -> " + libro[chiave]);
  // Es: titolo -> Il piccolo principe
}

// Questo programma serve a mostrare come si accede ai dati dentro un oggetto
// e come si possono stampare tutti i campi usando Node.js
