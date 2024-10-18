// 13 Övning (Avancerad): Uppgift:

// Skapa ett enkelt BMI-kalkylator. Be användaren ange sin längd i meter och vikt i kilogram. Beräkna BMI med formeln: BMI = vikt / (längd * längd). Skriv ut BMI-värdet med två decimaler. Syfte:

// Kombinera flera variabler och operationer. Hantera flyttal och formattering.

const weight = Number(window.prompt("Hur mycket väger du i kg? ", ""));
const height = Number(window.prompt("Hur lång är du i m?", ""));
const bmi = weight / (height * height);
window.alert(`Ditt BMI är ${bmi}`);
