let categoryListEl = document.querySelector('#categories');
let quantityOfCategories;

// отримуємо та виводимо кількість категорій
const getNumberOfCategories = () => {
    quantityOfCategories = categoryListEl.children.length;
    console.log(`Number of categories: ${quantityOfCategories}`);
};

//отримуємо та виводимо назву категорії та кількість елементів
const getCategories = () => {

    let arrOfCategories = [...categoryListEl.children];
    
    arrOfCategories.forEach(element => {
        let firstEl = element.firstElementChild;
        console.log(`Category: ${firstEl.innerHTML}`);
        console.log(`Elements: ${firstEl.nextElementSibling.children.length}`);
    });    
 }
//запускаємо функції по черзі.
getNumberOfCategories();
getCategories();