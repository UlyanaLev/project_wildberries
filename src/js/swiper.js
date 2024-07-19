'use strict'

// Автоматический скроллинг
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Первый слайд видимый
slides[currentSlide].classList.add('active');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.remove('next');
    slides[currentSlide].classList.add('active');
    setTimeout(() => {
        slides[currentSlide].classList.remove('prev');
        slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.add('next');
    }, 500);
}

function prevSlide () {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('next');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.remove('prev');
    slides[currentSlide].classList.add('active');
    setTimeout(() => {
        slides[currentSlide].classList.remove('next');
        slides[(currentSlide + 1) % totalSlides].classList.add('prev');
    }, 500);
}
setInterval(nextSlide, 3000)


const pagination = document.querySelector('.paginator');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        slides[currentSlide].style.display = 'none';
        currentSlide = i;
        slides[currentSlide].style.display = 'block';
    });
    pagination.append(dot);
}

// Анимация слайдов

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

// prevButton.disabled = currentSlide === 0;

// nextButton.disabled = currentSlide === totalSlides - 1;

prevButton.addEventListener('click', () => {
    // prevButton.disabled = currentSlide === 0;
    // nextButton.disabled = currentSlide === totalSlides - 1;
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
    updatePagination();
});

nextButton.addEventListener('click', () => {
    nextSlide();
    updatePagination();
});



