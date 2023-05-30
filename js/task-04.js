let counterValue = 0;
let output = document.querySelector("#value");

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const handleMinButtonClick = () => {
    output.innerHTML = counterValue += 1;
}

const handlePlusButtonClick = () => {
    output.innerHTML = counterValue -= 1;
}

decrementButton.addEventListener('click', () => {
    handleMinButtonClick();
});

incrementButton.addEventListener('click', () => {
    handlePlusButtonClick();
});
