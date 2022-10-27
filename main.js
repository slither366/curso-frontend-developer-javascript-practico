const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('click');
    desktopMenu.classList.toggle('inactive');//si ya tiene clase la quita y si no la tiene la agrega
}

console.log('Js console log');