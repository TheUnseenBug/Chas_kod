// Övning 1: Månadskonverterare (Lätt)

// Uppgift:

// Be användaren ange ett nummer mellan 1 och 12. Använd en switch-sats för att konvertera numret till motsvarande månadsnamn. 1: Januari 2: Februari ... 12: December Skriv ut månadsnamnet.

// Tips: Hantera ogiltig inmatning genom att inkludera en default-sats. Använd prompt() för att ta emot inmatningen.

const numb = Number(prompt("Ge ett tal mellan 1 och 12"));

let month = "";
switch (numb) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "Juli";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  default:
    month = "Ange nytt number";
    break;
}
console.log(month);
