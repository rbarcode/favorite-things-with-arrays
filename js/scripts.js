window.addEventListener("load", submit);
window.addEventListener("reset", submit);

let favoriteThingsArray = [];

function submit() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", processInput);
}

function processInput(event) {
  event.preventDefault();

  getInput();
}

function getInput() {
  const favoriteAnimal = document.getElementById("favorite-animal").value;
  const favoriteColor = document.getElementById("favorite-color").value;
  const favoriteCelebrity = document.getElementById("favorite-celebrity").value;
  const favoritePlanet = document.getElementById("favorite-planet").value;

  favoriteThingsArray.push(favoriteAnimal, favoriteColor, favoriteCelebrity, favoritePlanet);
  console.log("These items are in the array: " + favoriteThingsArray);
  console.log(favoriteThingsArray[0]);
}