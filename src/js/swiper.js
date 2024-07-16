'use strict'

// Автоматический скроллинг
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].style.display = 'none';

    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
}
setInterval(nextSlide, 3000); 

// 
const pagination = document.querySelector('.paginator');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        slides[currentSlide].style.display = 'none';
        currentSlide = i;
        slides[currentSlide].style.display = 'block';
    });
    pagination.appendChild(dot);
}

function updatePagination() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

updatePagination();

// Кнопки для переключения слайдов

const prevButton = document.querySelector('.slider_left');
const nextButton = document.querySelector('.slider_right');

prevButton.addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
    updatePagination();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    updatePagination();
});

