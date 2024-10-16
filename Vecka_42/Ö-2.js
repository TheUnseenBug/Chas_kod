//2 Övning: Byt värden mellan variabler (Lätt) Uppgift:

//Deklarera två variabler a och b och tilldela dem värdena 5 respektive 10. Byt värdena mellan a och b så att a blir 10 och b blir 5. Skriv ut värdena på a och b före och efter bytet. Lösningstips:

//Använd en tredje variabel som temporär lagring.

let a = 5;
let b = 10;

let c = a;

a = b;
b = c;
console.log(a, b);
