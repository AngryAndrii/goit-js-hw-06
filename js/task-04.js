let counterValue = 0;
let output = document.querySelector("#value");

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const plusFunction = () => {
    output.innerHTML = counterValue += 1;
}

const minusFunction = () => {
    output.innerHTML = counterValue -= 1;
}

decrementButton.addEventListener('click', () => {
    minusFunction();
});

incrementButton.addEventListener('click', () => {
    plusFunction();
});
