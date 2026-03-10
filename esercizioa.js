      console.log("Errore: Divisione per zero impossibile.");
      process.exit(1);
    }
    risultato = n1 / n2;
    break;
  default:
    console.log("Operazione non riconosciuta. Usa: add, sub, mul, div");
    process.exit(1);
}

// 6. Output finale
console.log(`-----------------------`);
console.log(`Risultato: ${n1} ${operazione} ${n2} = ${risultato}`);
console.log(`-----------------------`);

