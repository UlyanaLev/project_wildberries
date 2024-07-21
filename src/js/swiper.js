'use strict'

// Автоматический скроллинг
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Первый слайд видимый
slides[currentSlide].classList.add('active');
slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.add('prev');
slides[(currentSlide + 1) % totalSlides].classList.add('next');

function nextSlide(i = 1) {
    if (i > 1) {
        slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.remove('prev');
        slides[(currentSlide + 1) % totalSlides].classList.remove('next');
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('prev');
        currentSlide = (currentSlide + i) % totalSlides;
        slides[currentSlide].classList.add('next');
        slides[currentSlide].classList.add('active');
        setTimeout(() => slides[currentSlide].classList.remove('next'), 170);
        setTimeout(() => slides[(currentSlide - i + totalSlides) % totalSlides].classList.remove('prev'), 200);
        slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.add('prev');
        slides[(currentSlide + 1) % totalSlides].classList.add('next');
    }
    else {
        slides[currentSlide].classList.add('prev');
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.remove('next');
        slides[currentSlide].classList.add('active');
        slides[(currentSlide - 2 + totalSlides) % totalSlides].classList.remove('prev');
        slides[(currentSlide + 1) % totalSlides].classList.add('next');
    }
    updatePagination();
}
function prevSlide(i = 1) {
    if (i > 1) {
        slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.remove('prev');
        slides[(currentSlide + 1) % totalSlides].classList.remove('next');
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('next');
        currentSlide = (currentSlide - i + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('prev');
        slides[currentSlide].classList.add('active');
        setTimeout(() => slides[currentSlide].classList.remove('prev'), 170);
        setTimeout(() => slides[(currentSlide - i + totalSlides) % totalSlides].classList.remove('next'), 200);
        slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.add('prev');
        slides[(currentSlide + 1) % totalSlides].classList.add('next');
    }
    else {
        slides[currentSlide].classList.remove('active');
        slides[currentSlide].classList.add('next');
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.remove('prev');
        slides[currentSlide].classList.add('active');
        slides[(currentSlide - 1 + totalSlides) % totalSlides].classList.add('prev');
        slides[(currentSlide + 2) % totalSlides].classList.remove('next');
    }
    updatePagination();
}
setInterval(nextSlide, 3000)

// Пагинация
const pagination = document.querySelector('.paginator');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        if (i > currentSlide) {
            nextSlide(i - currentSlide);
        } else if (i < currentSlide) {
            prevSlide(currentSlide - i)
        }
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
prevButton.addEventListener('click', () => {
    prevSlide();
});
nextButton.addEventListener('click', () => {
    nextSlide();
});



