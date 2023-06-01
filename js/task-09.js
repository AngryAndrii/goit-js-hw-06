function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeButton = document.querySelector(".change-color");

changeButton.addEventListener('click', changeColor);

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}


