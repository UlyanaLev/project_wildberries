'use strict'

export function createNewElement(type, style, href, src, text, inputType, placeholder, rootDiv) {
    const element = document.createElement(type);
    if (style !== null) {
        if (typeof style === "object") {
            style.forEach(el => {
                element.classList.add(el);
            });
        }
        else {
            element.classList.add(style);
        }
    }
    if (href !== null) {
        element.href = href;
    }
    if (src !== null) {
        element.src = src;
    }
    if (text !== null) {
        element.textContent = text;
    }
    if (type === "input") {
        element.type = inputType;
        element.placeholder = placeholder;
    }
    if (type === "p" || style === "item") {
        rootDiv.prepend(element);
        return element;
    }
    rootDiv.append(element);
    return element;
}

export function createSwiper(root) {
    const swiper = createNewElement("div", "swiper", null, null, null, null, null, root);
    const containerSwiper = createNewElement("div", "container", null, null, null, null, null, swiper);
    const sliderSwiper = createNewElement("div", "slider", null, null, null, null, null, containerSwiper);

    // const slides = ['zhar_2880_1207.webp', 'dacha_dostavka_2880-new.webp', 'big_2880_02_073333.webp', 'jew_2880_11.webp'];
    const slides = ['zhar_2880_1207.webp', 'dacha_dostavka_2880-new.webp', 'big_2880_02_073333.webp', 'jew_2880_11.webp', 'moda_2880.jpg', 'cenotryas_2880.jpg'];
    slides.forEach(el => {
        imgUrl = "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/" + el;
        const slide1Swiper = createNewElement("div", "slide", null, null, null, null, null, sliderSwiper);
        const a1SlideSwiper = createNewElement("a", null, "#", null, null, null, null, slide1Swiper);
        const img1SlideSwiper = createNewElement("img", "slade_img", null, imgUrl, null, null, null, a1SlideSwiper);
    })
    const buttonLeftSliderSwiper = createNewElement("button", "slider_left", null, null, "←", null, null, sliderSwiper);
    const buttonRightSliderSwiper = createNewElement("button", "slider_right", null, null, "→", null, null, sliderSwiper);
    const paginatorSliderSwiper = createNewElement("div", "paginator", null, null, " ", null, null, sliderSwiper);
}