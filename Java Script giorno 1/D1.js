/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.*/

/*  Li chiederei di immaginare di avere una scatola di giocattoli con diversi tipi di giocattoli. Ogni tipo di giocattolo rappresenta un diverso tipo di "datatype".
 Li chiederei inoltre di assegnare un nome ad ogni giocattolo rispetto alla sua funzionalità, come ad esempio: 

Number: Come le figure magnetiche numerate, queste rappresentano i numeri e possono essere usate per contare, fare addizioni, sottrazioni, moltiplicazioni, divisioni ecc. Per esempio, 2 o 3.45 sono figure magnetiche numerate.

String: Con queste figure magnetiche che oltre numeri possono essere anche essere lettere puoi formare parole e frasi. Le stringhe in JavaScript sono proprio come queste lettere. Per esempio, "ciao" o "ciao123".

Boolean: Pensa al coperchio della tua scatola che può essere solo aperto (vero) o chiuso (falso). I dati booleani sono così: possono essere solo true o false.

Undefined: Immagina la tua scatola vuota. Undefined, significa che non hai ancora deciso cosa metterci dentro.

Null: Immagina invece che nella tua scatola hai inserito il tuo giocattolo preferito che però hai ripreso e quindi Null indica che nella scatola adesso c'è uno spazio ma che hai intenzionalmente lasciato vuoto. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* let myName; myName ="Elijon";
   console.log(myName); 
*/



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

 let esempio1; esempio1 =12;
   let esempio2; esempio2 =20;
   console.log(esempio1 + esempio2); 

   



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
 var x; x =12;
   console.log(x);





/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* const myName = "Laska";
   console.log(myName);
   myName ="Elijon Laska"
   console.log(myName);
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
 var x; x =12;
   let num4; num4 ="4";
   console.log(x - num4);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

 let name1; name1 ="john"; 
   let name2; name2 ="John";
   console.log(name1 === name2);
   console.log(name1 !== name2);
   console.log(name1.toLowerCase() === name2.toLowerCase());


