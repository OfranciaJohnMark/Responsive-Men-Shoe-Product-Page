const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.navbar-nav');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});