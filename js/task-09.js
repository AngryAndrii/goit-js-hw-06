function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let changeButton = document.querySelector('.change-color');
let textOut = document.querySelector('.color');

changeButton.addEventListener('click', changeColor);

function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textOut.innerHTML = newColor;
}
