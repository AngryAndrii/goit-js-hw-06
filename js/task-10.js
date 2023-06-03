const input = document.querySelector("#controls").firstElementChild;
const createButton = input.nextElementSibling;
const destroyButton = createButton.nextElementSibling;
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount;

function getAmountFunction() {
  amount = input.value;
  return amount;
}

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    let d = 20 + (i * 10);
    let createdDivs = document.createElement('div');
    createdDivs.classList.add('newDivs');
    createdDivs.style.width = `${d}px`;
    createdDivs.style.height = `${d}px`;
    createdDivs.style.backgroundColor = getRandomHexColor();
    boxes.append(createdDivs);
  }
}

function destroyBoxes() {
  let allNewDivs = document.querySelectorAll(".newDivs");
    for (let i = 0; i < allNewDivs.length; i++) {
      allNewDivs[i].remove();
  }
  amount = 0;
  input.value = amount;
}

input.addEventListener('input', getAmountFunction);

createButton.addEventListener('click', () => {
  createBoxes(amount);
})

destroyButton.addEventListener('click', destroyBoxes);