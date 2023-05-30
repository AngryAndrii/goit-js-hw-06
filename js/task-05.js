
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

const handleOutClick = (input, output) => {
    const inputValue = input.value.trim();
    output.innerHTML = inputValue;
    if (inputValue === '') {
        output.innerHTML = "Anonymous";
    }
}

input.addEventListener('input', () => {
    handleOutClick(input, output);
})