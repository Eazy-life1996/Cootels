$(document).ready(function () {
  $('.comments__slider').slick({
    dots: true,
    arrows: false
  });
});

//Выше настройка слайдера!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let btn = document.querySelectorAll('.footer__button');

btn.forEach(btn => {
  btn.addEventListener('click', function () {
    btn.nextElementSibling.classList.toggle('footer__list');
  });
});

//Выше реализовано раскрытие списков в футере!!!!!!!!!!!!!