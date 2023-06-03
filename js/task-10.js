function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls").firstElementChild;
const createButton = input.nextElementSibling;
const destroyButton = createButton.nextElementSibling;
const boxes = document.querySelector('#boxes');

let amount;

function getAmountFunction() {
  amount = input.value;
  return amount;
}

function createBoxes(amount) {
  console.log(`we create ${amount} divs`);
  for (let i = 1; i <= amount; i += 1) {
    let createdDivs = document.createElement('div');
    createdDivs.classList.add('newDivs');
    boxes.append(createdDivs);
  }
}


function destroyBoxes() {
  let allNewDivs = document.querySelectorAll(".newDivs");
    for (let i = 0; i < a.length; i++) {
      allNewDivs[i].remove();
    }
}

input.addEventListener('input', getAmountFunction);
createButton.addEventListener('click', () => {
  createBoxes(amount);
})
destroyButton.addEventListener('click', destroyBoxes);