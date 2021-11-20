const formEl = document.querySelector('.form');
const loginBtnEl = document.querySelector('.open-popup');
const bodyEl = document.querySelector('body');

loginBtnEl.addEventListener('click', function () {
    formEl.classList.toggle('form-open');
})

formEl.addEventListener('transitionend', function () {
    bodyEl.classList.toggle('blur');
})
