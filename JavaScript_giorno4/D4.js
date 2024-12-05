/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO1");

  function area(l1, l2) {
    return l1 * l2;
  }
  let lunghezza = 5;
  let altezza = 10;
  let risultato = area(lunghezza, altezza);
  console.log("l'Areara del rettangolo è:", risultato); 
  
console.log("***********************************************");


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO2");

  function crazySum(a, b) {
    if (a === b) {
      return (a + b) * 3;
    } else {
      return a + b;
    }
  }
  let numero1 = 5;
  let numero2 = 10;
  let risultatoes2 = crazySum(numero1, numero2);
  console.log("Valore parametri diverso quindi il risultato è:", risultatoes2);

  numero1 = 5;
  numero2 = 5;
  risultatoes2 = crazySum(numero1, numero2);
  console.log("Valore parametri uguale quindi il risultato è:",risultatoes2);

console.log("***********************************************");

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO3");

  function crazyDiff(numeroparametro) {
    let differenza = Math.abs(numeroparametro - 19);
    if (numeroparametro > 19) {
      return differenza * 3;
    } else {
      return differenza;
    }
  }
  let primorisultatoes3 = crazyDiff(29);
  console.log("Il numero è maggiore di 19 quindi il risultato é:", primorisultatoes3);

  let secondorisultatoes3 = crazyDiff(9);
  console.log("Il numero è minore di 19 quindi il risultato é:", secondorisultatoes3);
  
console.log("***********************************************");

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO4");

  function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
      return true;
    } else {
      return false;
    }
  }
  let risultato1es4 = boundary(55);
  console.log("Il numero è compreso tra 20 e 100 qundi è:", risultato1es4);

  let risultato2es4 = boundary(15);
  console.log("Il numero è minore di 20 quindi è:",risultato2es4);

  let risultato3es4 = boundary(400);
  console.log("Il numero è 400 qundi è:",risultato3es4); 
  
console.log("***********************************************");

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO5");

  function epify(str) {
    if (str.startsWith("EPICODE")) {
      return str;
    } else {
      return "EPICODE " + str;
    }
  }
  let stringa1 = "corso Full-Stuck developer";
  let risultato1es5 = epify(stringa1);
  console.log(risultato1es5);
  
  let stringa2 = "EPICODE è il meglio.";
  let risultato2es5 = epify(stringa2);
  console.log(risultato2es5);

console.log("***********************************************");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO6");

  function check3and7(numero) {
    if (numero > 0 && (numero % 3 === 0 || numero % 7 === 0)) {
      return true;
    } else {
      return false;
    }
  }
  
  let risultato1 = check3and7(21);
  console.log("21 è un multiplo sia di 3 che di 7 quindi è:",risultato1);
  
  let risultato2 = check3and7(10);
  console.log("10 non è multiplo ne' di 3 ne' di 7 quindi è:",risultato2);

console.log("***********************************************");
  


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO7");

  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  let stringa = "EPICODE";
  let risultatoes7 = reverseString(stringa);
  console.log("La stringa invertita è:", risultatoes7);
  
console.log("***********************************************");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO8");

  function upperFirst(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  let frase = "il gruppo webEx fS1024IT è il migliore";
  let risultatoes8 = upperFirst(frase);
  console.log("La frase modificata è:", risultatoes8); 

console.log("***********************************************");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO9");

  function cutString(str) {
    return str.slice(1, -1);
  }
  let stringaes9 = "EPICODE";
  let risultatoes9 = cutString(stringaes9);
  console.log("La stringa modificata è:", risultatoes9);
  
console.log("***********************************************");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO10");

  function giveMeRandom(n) {
    
  }
console.log("***********************************************");
