const hideHeaderButton = document.querySelector('.hide-header-button');
const header = document.querySelector('.header');

hideHeaderButton.addEventListener('click', () => {
  header.classList.toggle('header--hidden');
});