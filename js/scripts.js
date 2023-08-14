window.addEventListener("load", submit);
window.addEventListener("reset", submit);

let favoriteThingsArray = [];
let favoriteThingsRearrangedArray = [];

appendHTML();

function submit() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", processInput);
}

function processInput(event) {
  event.preventDefault();

  getInput();
  newlyArrangedArray();
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

function appendHTML() {
  window.onload = function () {

    let ulTag = document.createElement("ul");
    let form = document.getElementById("survey");
    form.after(ulTag);
    let liTag1 = document.createElement("li");
    let liTag2 = document.createElement("li");
    let liTag3 = document.createElement("li");
    ulTag.append(liTag1);
    liTag1.after(liTag2);
    liTag2.after(liTag3);
    liTag1.setAttribute("id", "list-item-1");
    liTag2.setAttribute("id", "list-item-2");
    liTag3.setAttribute("id", "list-item-3");


  }
}

function populateFields() {
  // console.log(favoriteThingsRearrangedArray[0]);
  let liTag1 = document.getElementById("list-item-1");
  let liTag2 = document.getElementById("list-item-2");
  let liTag3 = document.getElementById("list-item-3");
  liTag1.append(favoriteThingsRearrangedArray[0]);
  liTag2.append(favoriteThingsRearrangedArray[1]);
  liTag3.append(favoriteThingsRearrangedArray[2]);

}