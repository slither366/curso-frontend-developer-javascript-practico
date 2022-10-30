const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

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