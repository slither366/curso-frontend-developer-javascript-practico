const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    //console.log('click');
    desktopMenu.classList.toggle('inactive');//si ya tiene clase la quita y si no la tiene la agrega
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

//console.log('Js console log');