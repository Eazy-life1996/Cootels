$(document).ready(function () {
  $('.comments__slider').slick({
    dots: true,
    arrows: false
  });
});

//Выше настройка слайдера!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let btn = document.querySelector('.js-btn');
let btnSc = document.querySelector('.js-btn-2');
let btnTh = document.querySelector('.js-btn-3');
let list = document.querySelector('.footer__list');
let listSc = document.querySelector('.footer__list-2');
let listTh = document.querySelector('.footer__list-3');

function firstClick () {
  list.classList.toggle('footer__list');
}

function secondClick () {
  listSc.classList.toggle('footer__list');
}

function thirdClick () {
  listTh.classList.toggle('footer__list');
}

btn.addEventListener("click", firstClick);
btnSc.addEventListener("click", secondClick);
btnTh.addEventListener("click", thirdClick);

//Выше реализовано раскрытие списков в футере!!!!!!!!!!!!!