const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryStyle = {
  display: 'flex',
  flexDirection: 'column',
  listStyleType: 'none',
  alignItems: 'center',
  width: '450px',
}

const makeElem = ({ url, alt }) => {
  let card = `<li><img class="gallery-img" src="${url}" alt="${alt}" width="${galleryStyle.width}"></li>`;
  return card;
}

const markUp = images.map(el => makeElem(el));
console.log(markUp);

const gallery = document.querySelector(".gallery");

gallery.style.display = galleryStyle.display;
gallery.style.flexDirection = galleryStyle.flexDirection;
gallery.style.listStyleType = galleryStyle.listStyleType;
gallery.style.alignItems = galleryStyle.alignItems;
gallery.style.listStyleType = galleryStyle.listStyleType;

gallery.insertAdjacentHTML("afterbegin", markUp.join(' '));