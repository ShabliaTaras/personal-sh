// "use strict";

// ВІДКРИТТЯ МЕНЮ

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");
const menuListItem = document.querySelector(".menu__list-item a");

if (menuBtn) {
  menuBtn.addEventListener("click", function (event) {
    menuBtn.classList.toggle("menu__btn--active");
    menu.classList.toggle("menu--open");
  });
}

// ЗАКРИТТЯ МЕНЮ

$(".menu__list-item").on("click", function () {
  $(".menu__list").removeClass("menu--open");
  $(".menu__btn").removeClass("menu__btn--active");
});

// АКТИВНА НАВІГАЦІЙНА КНОПКА

$(".menu__list").on("click", "li", function () {
  $(".menu__list .menu__list-item.active").removeClass("active");
  $(this).addClass("active");
});

// СКРОЛЛ ПРИ КЛІКУ НА НАВІГАЦІЙНЕ МЕНЮ

const links = document.querySelectorAll(".menu-list__item, .page-btn__link");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// ФІЛЬТЕР MIXITUP

let mixer = mixitup(".works__items", {
  load: {
    filter: ".html",
  },
  animation: {
    enable: false,
  },
});

// СКРОЛЛ FIXED MENU

window.onscroll = () => {
  const header = document.querySelector(".header__top");
  const height = window.scrollY;
  if (height >= 85) {
    header.classList.add("on-scroll");
  } else {
    header.classList.remove("on-scroll");
  }
};

// АНІМАЦІЯ AOS

AOS.init();
