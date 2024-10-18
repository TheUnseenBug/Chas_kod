// 14 Övning: Konvertera mellan olika datatyper (Avancerad) Uppgift:

// Be användaren att ange ett värde. Kontrollera om värdet är ett nummer, sträng, boolean eller något annat. Om det är ett nummer, konvertera det till en sträng och vice versa. Om det är en boolean, konvertera det till en sträng och ett nummer. Skriv ut alla resultaten med beskrivningar. Lösningstips:

// Använd funktioner som String(), Number() och Boolean().

const numb = Number(window.prompt("ge mig siffra", ""));

switch (numb) {
  case typeof numb === Number:
    String(numb);
    break;

  case typeof numb === String:
    Number(numb);
    break;

  case typeof numb === Boolean:
    String(numb);
    break;

  default:
    break;
}
