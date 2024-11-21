let characters = [];

async function fetchStarWarsData() {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();

    characters = data.results;

    console.log("Characters updated:", characters);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function main() {
  await fetchStarWarsData();
  renderList();
}

main();
function renderList() {
  characters.forEach((character) => {
    const wrapper = document.querySelector(".wrapper");

    const card = document.createElement("div");
    card.className = "card";

    const cardName = document.createElement("p");
    cardName.className = "card-text";
    cardName.textContent = character.name;
    card.appendChild(cardName);
    wrapper.appendChild(card);
  });
}

function renderDetails(character) {
  const wrapper = document.querySelector(".wrapper");

  const card = document.createElement("div");
  card.className = "char-card";

  const cardName = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.name;

  const cardHeight = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.height;

  const cardMass = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.mass;

  const cardHair = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.hair_color;

  const cardSkin = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.skin_color;

  const cardEyes = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.eye_color;

  const cardBirth = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.birth_year;

  const cardGender = document.createElement("p");
  cardName.className = "card-text";
  cardName.textContent = character.gender;

  card.appendChild(cardName);
  card.appendChild(cardBirth);
  card.appendChild(cardEyes);
  card.appendChild(cardGender);
  card.appendChild(cardHair);
  card.appendChild(cardHeight);
  card.appendChild(cardSkin);
  card.appendChild(cardMass);
  card.appendChild(cardName);
  wrapper.appendChild(card);
}
