let formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    let elements = event.currentTarget.elements;

    let userData = new Object();

    userData.email = elements.email.value;
    userData.password = elements.password.value;

    if (userData.email !== '' && userData.password !== '') {
        console.log(userData);
    } else {
        alert('The form has empty fields. Please enter the data')
    }
}
