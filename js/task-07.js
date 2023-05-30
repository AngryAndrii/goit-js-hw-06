const refs = {
    fontSizeControl: document.querySelector('#font-size-control'),
    textOutput: document.querySelector('#text'),
}

function onInputChange() {
    let fontValue = refs.fontSizeControl.value;
    refs.textOutput.style.fontSize = `${fontValue}px`;
}

refs.fontSizeControl.addEventListener('input', onInputChange);
