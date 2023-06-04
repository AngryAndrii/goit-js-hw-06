const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsList = document.querySelector("#ingredients");

ingredients.map(el => {
  const createEl = document.createElement("li");
  createEl.classList.add("item");
  createEl.textContent = el;
  ingredientsList.append(createEl);
  return createEl;
})