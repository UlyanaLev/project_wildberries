'use strict'

document.querySelector('.burger').addEventListener('click', () => {
let headerWrap = document.querySelector('.header-wrap');
let burgerBtn = document.querySelector('.burger');
let bodyScroll = document.querySelector('body');

headerWrap.classList.toggle('menu-wrap');
burgerBtn.classList.toggle('active');
bodyScroll.classList.toggle('body_hidden');

document.querySelector('.logo').addEventListener('click', () => {
    headerWrap.classList.remove('menu-wrap');
    burgerBtn.classList.remove('active');
    bodyScroll.classList.remove('body_hidden');
});

document.querySelector('.navigation-list').addEventListener('click', () => {
    headerWrap.classList.remove('menu-wrap');
    burgerBtn.classList.remove('active');
    bodyScroll.classList.remove('body_hidden');
});
});

