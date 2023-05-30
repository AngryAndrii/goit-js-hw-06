const input = document.querySelector("#validation-input");

function removeClass() {
    input.classList.remove('invalid');
    input.classList.remove('valid');
}

function onInputBlur() {
    if (this.value.trim().length !== +this.dataset.length) {
        removeClass();
        this.classList.add('invalid');
        return;
    }
    removeClass();
    this.classList.add('valid')
    return;
}

input.addEventListener('blur', onInputBlur);