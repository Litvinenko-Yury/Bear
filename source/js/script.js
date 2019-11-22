"use strict";

var burger = document.querySelector(".burger");
var mainNav = document.querySelector(".main-nav__list");


/*=====*/
// если JS включен, показыаем бургер...
burger.classList.remove("burger--no-js");
// ... и сворачиваем меню
mainNav.classList.add("main-nav__list--js");

/*=====*/
//вкл/выкл анимации бургера...
burger.addEventListener("click", function () {
  burger.classList.toggle("burger--close");

  // ... и показываем/скрываем меню
  mainNav.classList.toggle("main-nav__list--show");
});
