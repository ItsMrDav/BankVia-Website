'use strict';
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// MODAL WINDOW

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// IMPLEMENT SMOOTH SCROLLING(scrollIntoView() function)
const btnSCrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);
btnSCrollTo.addEventListener(`click`, function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
// // Styles
// document.documentElement.style.setProperty(`--color-primary`, `orangered`);
// // Attributes
// const logo = document.querySelector(`.nav__logo`);
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.id);
// console.log(logo.className);

// logo.alt = `Beautiful minimalist logo`;

// // Get and Set Attributes
// console.log(logo.getAttribute(`id`));
// logo.setAttribute(`company`, `Bankist`);
// console.log(logo.getAttribute(`src`));

// const link = document.querySelector(`.nav__link--btn`);
// console.log(link.href);
// console.log(link.getAttribute(`href`));

// // Data Attribute
// console.log(logo.dataset.versionNumber);

// // Classes
// logo.classList.add(`c`);
// logo.classList.remove(`c`);
// logo.classList.toggle(`c`);
// logo.classList.contains(`c`);

// // Don't use override all other classes
// // logo.className = `dav`
