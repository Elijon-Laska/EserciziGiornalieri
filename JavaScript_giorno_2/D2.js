/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO1");

const numeropiùgrande=(3, 6) 
if(3 > 6) {
  console.log("il numero più grande è : 3");
} else {
  console.log("il numero più grande è : 6");
  
}
 console.log("**************************************************");
 
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2");
const numerodiversoda5 = 3
if (numerodiversoda5 !== 5) {
  console.log("not equal");
} 
console.log("**************************************************");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO3");
const divisibileper5=(20)
if (20 % 5 === 0) {
  console.log("divisibile per 5");
  
}
console.log("**************************************************");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO4");
const verificatraduenumeri= (2, 6)
if (2 === 8 || 6 === 8) {
  console.log("il valore di uno dei due è 8");
} else if (2 + 6 === 8 ) { console.log("La somma di questi numeri è uguale a 8 ");

} else if (2 - 6 === 8 ) { console.log("La sottrazione di questi numeri è uguale a 8");

} else {"Nessuna delle precedenti affermazioni è vera"};
console.log("**************************************************");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5");

let totalShoppingCart = 30;

const costoSpedizione = 10;

let ammontareTotale;

if (totalShoppingCart > 50) {
  ammontareTotale = totalShoppingCart;
} else {
  ammontareTotale = totalShoppingCart + costoSpedizione ; 
}

console.log(ammontareTotale);

console.log("**************************************************");

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 6");
let totaleShoppingCart = 30;
let sconto = totalShoppingCart * 0.20;
let totaleScontato = totalShoppingCart - sconto;

const costodiSpedizione = 10;

let ammontaredelTotale;

if (totaleScontato > 50) {
  ammontareTotale = totaleScontato;
} else {
  ammontareTotale = totaleScontato + costoSpedizione ; 
}

console.log(ammontareTotale);

console.log("*************************************************");


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 7");

let a = 5;
let b = 6;
let c = 7;


if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

if (a > c) {
  let temp = a;
  a = c;
  c = temp;
}

if (b > c) {
  let temp = b;
  b = c;
  c = temp;
}


console.log("Numeri in ordine crescente: ", a, b, c);

const numeriordinati = [5, 6, 7]
console.log(numeriordinati.sort()
);

console.log("**************************************************");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 8");

const valore = 42;
let ilNumero = (typeof valore === 'number');
console.log("Il valore è un numero:", ilNumero); 

console.log("**************************************************");


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
