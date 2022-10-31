const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleMenuCarrito);


function toggleDesktopMenu(){
    //console.log('click');
    desktopMenu.classList.toggle('inactive');//si ya tiene clase la quita y si no la tiene la agrega

    if(!aside.classList.contains('inactive')){
        aside.classList.toggle('inactive');
    }
    
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');

    if(!aside.classList.contains('inactive')){
        aside.classList.toggle('inactive');
    }
}

function toggleMenuCarrito(){
    aside.classList.toggle('inactive');

    if(!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }

    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.toggle('inactive');
    }
}

//console.log('Js console log');

const productList = [];

productList.push({
    name: 'Bike',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Radio',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Laptop',
    price: 1220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Keyboard',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Mouse',
    price: 40,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Cooler',
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

function renderProducts(arr){
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const imgCard = document.createElement('img');
        imgCard.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const divVacio = document.createElement('div');
        const parrafoPrice = document.createElement('p');
        parrafoPrice.innerText ='$'+product.price;
        const parrafoName = document.createElement('p');
        parrafoName.innerText = product.name;

        const figure = document.createElement('figure');
        const imagen2 = document.createElement('img');
        imagen2.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        figure.appendChild(imagen2);
        divVacio.appendChild(parrafoPrice);
        divVacio.appendChild(parrafoName);
        productInfo.appendChild(divVacio);
        productInfo.appendChild(figure);
        productCard.appendChild(imgCard);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
        
    }
}

renderProducts(productList);