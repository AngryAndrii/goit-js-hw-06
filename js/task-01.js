let categoryListEl = document.querySelector('#categories');
let quantityOfCategories;

const getNumberOfCategories = () => {
    quantityOfCategories = categoryListEl.children.length;
    console.log(`Number of categories: ${quantityOfCategories}`);
};

const getCategories = () => {

    let arrOfCategories = [...categoryListEl.children];
    
    arrOfCategories.forEach(element => {
        let firstEl = element.firstElementChild;
        console.log(`Category: ${firstEl.innerHTML}`);
        console.log(`Elements: ${firstEl.nextElementSibling.children.length}`);
    });    
 }

getNumberOfCategories();
getCategories();