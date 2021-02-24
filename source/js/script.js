// Gamburger

const mobileToogle = document.querySelector(".page-header__toogle-nojs");
const mobileNav = document.querySelector(".header-nav");

mobileToogle.classList.add("page-header__toogle");
mobileNav.classList.add("header-nav--closed");

mobileToogle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mobileToogle.classList.toggle("page-header__toogle-nojs--opened");
  mobileToogle.classList.toggle("page-header__toogle-nojs--closed");
  mobileNav.classList.toggle("header-nav--closed");
});


// modal


const modal = document.querySelector(".modal");
const overlay = document.querySelector(".page__background-modal");
const cartLink = document.querySelector(".product__add-in-basket");
const buttonCart = document.querySelector(".product-main__button");
const openModal = function () {
  modal.classList.add("modal--opened");
  overlay.classList.add("page__background-modal--show");
};

const closeModal = function () {
  modal.classList.remove("modal--opened");
  overlay.classList.remove("page__background-modal--show");
};

if (cartLink) {
  cartLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  openModal();
  });

  overlay.addEventListener("click", function (evt) {
  closeModal();
  });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal--opened")) {
    evt.preventDefault();
    modal.classList.remove("modal--opened");
    }

  if (overlay.classList.contains("page__background-modal--show")) {
    evt.preventDefault();
    overlay.classList.remove("page__background-modal--show");}
    }
  });
}

if (buttonCart) {
  buttonCart.addEventListener("click", function (evt) {
  evt.preventDefault();
  openModal();
});

overlay.addEventListener("click", function (evt) {
closeModal();
});

window.addEventListener("keydown", function (evt) {

if (evt.keyCode === 27) {
if (modal.classList.contains("modal--opened")) {
  evt.preventDefault();
  modal.classList.remove("modal--opened");
  }

if (overlay.classList.contains("page__background-modal--show")) {
  evt.preventDefault();
  overlay.classList.remove("page__background-modal--show");}}
  });
}
