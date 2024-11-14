// 11 Övning: Skapa ett objekt för en bok (Svår) Uppgift:

// Skapa ett objekt book med egenskaperna title, author, pages och isAvailable. Tilldela lämpliga värden till egenskaperna. Skriv en funktion printBookInfo() som skriver ut all information om boken. Ändra värdet på isAvailable och kör funktionen igen. Lösningstips:

// Använd punktnotation för att komma åt och ändra egenskaper.

// Ytterligare Övningar (För den som vill utmana sig själv)

const book = {
  title: "Hej",
  author: "taskig",
  pages: 3,
  isAvailable: false,
};

function printBookInfo(book) {
  book.isAvailable = true;
  console.log(
    `Book title: ${book.title} book author: ${book.author} book pages: ${book.pages}, is it availabe: ${book.isAvailable}`
  );
}
printBookInfo(book);
