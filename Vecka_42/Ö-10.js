// 10 Övning: Skapa en lista över favoritfilmer (Svår) Uppgift:

// Deklarera en array favoriteMovies och lägg till tre av dina favoritfilmer som strängar. Lägg till ytterligare en film till arrayen. Ändra värdet på den andra filmen. Skriv ut antalet filmer i listan och alla filmerna. Lösningstips:

// Använd metoder som push() för att lägga till element. Kom ihåg att array-index börjar på 0.

const favoriteMovies = [
  "elementary",
  "puss in boots",
  "spider-man into the spiderverse",
];

favoriteMovies.push("Shrek 2");

favoriteMovies[1] = "Shrek";
console.log(favoriteMovies, favoriteMovies.length);
