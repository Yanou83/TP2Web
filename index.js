document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('open');
        navMenu.classList.toggle('open');
        burger.classList.toggle('cross');
    });
});
