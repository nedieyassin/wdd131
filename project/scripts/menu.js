const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');



/// document loaded
document.addEventListener('DOMContentLoaded', () => {
    navToggle.addEventListener('click', () => {
        console.log('Menu toggle clicked');
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('open');
    });
});