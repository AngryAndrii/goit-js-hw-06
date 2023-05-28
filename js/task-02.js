const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let ingredientsList = document.querySelector("#ingredients");

let liEl;

ingredients.forEach(el => {
    liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.innerHTML = el;
    ingredientsList.append(liEl);
})




