'use strict';
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// ELEMENTS

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnSCrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// MODAL WINDOW

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
///////////////////////////////////// IMPLEMENT SMOOTH PAGE NAVIGATION with (scrollIntoView() function)

// With EVENT DELAGATION (attaching handler to parent), instead of adding handler for each nav link
// 1. Add event listener to common parent element
// 2. Determine what element originated the event
document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  // Matching strategy
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// IMPLEMENT SMOOTH BUTTON NAVIGATION with (scrollIntoView() function)

btnSCrollTo.addEventListener(`click`, function (e) {
  section1.scrollIntoView({ behavior: `smooth` });
});
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// UNRELATED TO PROJECT /////////////////////////////
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
/////////////////////////////////////// EVENTS
// // addEventListener(), removeEventLister()
// const h1 = document.querySelector(`h1`);

// const alertH1 = function (e) {
//   alert(`addEventListener: Great! You are reading the heading.`);
//   // Removing event listener after one usage
//   // h1.removeEventListener(`mouseenter`, alertH1);
// };

// h1.addEventListener(`mouseenter`, alertH1);

// // Remove event listener with setTimeout()
// setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 5000);
/////////////////////////////////////// EVENT PROPAGATION(default:bubbling(target-to-root), capturing)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// // PROPAGATION(default:bubbling(target-to-root), capturing)
// document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`LINK`, e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
//   // Stop propagation
//   // event.stopPropagation();
// });

// document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`CONTAINER`, e.target, e.currentTarget);
// });

// document.querySelector(`.nav`).addEventListener(`click`, function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(`NAV`, e.target, e.currentTarget);
// });
