window.addEventListener("load", submit);
window.addEventListener("reset", hideResults);

let favoriteThingsArray = [];
let favoriteThingsRearrangedArray = [];

function submit() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", processInput);
}

function processInput(event) {
  event.preventDefault();

  getInput();
  newlyArrangedArray();
  appendHTML();
  populateFields();
}

function getInput() {
  const favoriteAnimal = document.getElementById("favorite-animal").value;
  const favoriteColor = document.getElementById("favorite-color").value;
  const favoriteCelebrity = document.getElementById("favorite-celebrity").value;
  const favoritePlanet = document.getElementById("favorite-planet").value;

  favoriteThingsArray.push(favoriteAnimal, favoriteColor, favoriteCelebrity, favoritePlanet);
  // console.log("These items are in the array: " + favoriteThingsArray);
  // console.log(favoriteThingsArray[0]);
}

function newlyArrangedArray() {
  favoriteThingsRearrangedArray.push(favoriteThingsArray[1]);
  favoriteThingsRearrangedArray.push(favoriteThingsArray[0]);
  favoriteThingsRearrangedArray.push(favoriteThingsArray[2]);
  // console.log("This is what's in favoriteThingsRearranged: " + favoriteThingsRearrangedArray);
}

let ulTag = document.createElement("ul");
let liTag1 = document.createElement("li");
let liTag2 = document.createElement("li");
let liTag3 = document.createElement("li");

function appendHTML() {

  let form = document.getElementById("survey");
  form.after(ulTag);
  ulTag.append(liTag1);
  liTag1.after(liTag2);
  liTag2.after(liTag3);
  liTag1.setAttribute("id", "list-item-1");
  liTag2.setAttribute("id", "list-item-2");
  liTag3.setAttribute("id", "list-item-3");


}

function populateFields() {
  console.log(favoriteThingsRearrangedArray[0]);
  let liTag1FromArray = document.getElementById("list-item-1");
  let liTag2FromArray = document.getElementById("list-item-2");
  let liTag3FromArray = document.getElementById("list-item-3");
  liTag1FromArray.append(favoriteThingsRearrangedArray[0]);
  liTag2FromArray.append(favoriteThingsRearrangedArray[1]);
  liTag3FromArray.append(favoriteThingsRearrangedArray[2]);

}

function hideResults() {
  favoriteThingsArray.splice(0, favoriteThingsArray.length);
  favoriteThingsRearrangedArray.splice(0, favoriteThingsRearrangedArray.length);
  ulTag.remove();
  liTag1.innerText = null;
  liTag2.innerText = null;
  liTag3.innerText = null;

}