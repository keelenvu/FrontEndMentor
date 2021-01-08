let hamburger = document.querySelector('.nav-hamburger');
let popup = document.querySelector('.hamburger__popup');
let hamMenu = document.querySelector('.ham-links');

hamburger.addEventListener('click', () => {
 hamMenu.classList.toggle('ham-links-active');
 popup.classList.toggle('blur');
 hamburger.classList.toggle('nav-hamburger-open');
});