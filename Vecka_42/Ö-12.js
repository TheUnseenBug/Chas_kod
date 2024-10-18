// 12 Övning (Avancerad): Uppgift:

// Skriv ett program som omvandlar temperatur från Celsius till Fahrenheit. Be användaren ange temperaturen i Celsius. Använd formeln: Fahrenheit = Celsius * 9/5 + 32. Skriv ut resultatet med en tydlig beskrivning. Syfte:

// Använda matematiska operationer. Öva på in- och utmatning.

const temperature = Number(window.prompt("vad är det för temp i Celsius", ""));

const tempF = temperature * (9 / 5) + 32;
window.alert(`The temperature in Fahrenheit is ${tempF}`);
