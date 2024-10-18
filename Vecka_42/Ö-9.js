// 9 Övning (Svår): Uppgift:

// Be användaren att ange tre tal via prompt(). Konvertera inmatningen till nummer. Beräkna medelvärdet av talen. Hantera felaktig inmatning genom att kontrollera om värdena är nummer. Skriv ut medelvärdet med två decimaler. Syfte:

// Öva på användarinmatning och typkonvertering. Introducera enkel felhantering. Använda metoder som Number() och toFixed().

const numA = Number(window.prompt("tal", ""));
const numB = Number(window.prompt("tal", ""));
const numbC = Number(window.prompt("tal", ""));

const average = (numA + numB + numbC) / 3;

if (numA || numB || numbC !== typeof number) {
  alert("wrong input has to be number");
}

console.log(average);
