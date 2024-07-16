'use strict'

const root = document.querySelector("#root");
console.log(root);

// Создание элементов
function createNewElement(type, style, href, src, text, inputType, placeholder, rootDiv) {
    const element = document.createElement(type);
    if (style !== null) {
        if (typeof style === "object"){
            style.forEach(el => {
                element.classList.add(el);
            });
        }
        else {
            element.classList.add(style);
        }
    }
    if (href!== null) {
        element.href = href;
    }
    if (src!== null) {
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

function newElements() {
    //header
    const header = createNewElement("header", "header", null, null, null, null, null, root);
    const containerHeader = createNewElement("div", "container", null, null, null, null, null, header);
    const wrapHeader = createNewElement("div", "header_wrap", null, null, null, null, null, containerHeader);
    const logoHeader = createNewElement("div", "logo", null, null, null, null, null, wrapHeader);
    const aLogoHeader = createNewElement("a", "a_logo", "#", null, "Wildberries", null, null, logoHeader);
    const burgerHeader = createNewElement("div", "burger", null, null, null, null, null, wrapHeader);
    const spanBurgerHeader = createNewElement("span", null, null, null, null, null,null, burgerHeader);
    const inputHeader = createNewElement("div", "input", null, null, null, null, null, wrapHeader);
    const inputSearchHeader = createNewElement("input", "header_search-catalog", null, null, null, "text", "Найти на Wildberries", inputHeader);
    const iconHeader = createNewElement("div", "header_icon", null, null, null, null, null, wrapHeader);
    const aIconHeaderLocation = createNewElement("a", "a_location", "#", null, null, null, null, iconHeader);
    const faSolidLocationHeader = createNewElement("div", ["fa-solid", "fa-location-dot"], null, null, null, null, null, aIconHeaderLocation);
    const spanLocationHeader = createNewElement("span", "header_icon_text", null, null, "Адреса", null, null, aIconHeaderLocation);
    const aIconHeaderUser = createNewElement("a", "a_user", "#", null, null, null, null, iconHeader);
    const faSolidUserHeader = createNewElement("div", ["fa-solid", "fa-user"], null, null, null, null, null, aIconHeaderUser);
    const spanUserHeader = createNewElement("span", "header_icon_text", null, null, "Войти", null, null, aIconHeaderUser);
    const aIconHeaderBasket = createNewElement("a", null, "#", null, null, null, null, iconHeader);
    const faSolidBasketHeader = createNewElement("div", ["fa-solid", "fa-basket-shopping"], null, null, null, null, null, aIconHeaderBasket);
    const spanBasketHeader = createNewElement("span", "header_icon_text", null, null, "Корзина", null, null, aIconHeaderBasket);
    
    //swiper
    const swiper = createNewElement("div", "swiper", null, null, null, null, null, root);
    const containerSwiper = createNewElement("div", "container", null, null, null, null, null, swiper);
    const sliderSwiper = createNewElement("div", "slider", null, null, null, null, null, swiper);
    const slide1Swiper = createNewElement("div", "slide", null, null, null, null, null, sliderSwiper);
    const a1SlideSwiper = createNewElement("a", null, "#", null, null, null, null, slide1Swiper);
    const img1SlideSwiper = createNewElement("img", "slade_img", null, "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/zhar_2880_1207.webp", null, null, null, a1SlideSwiper);
    const slide2Swiper = createNewElement("div", "slide", null, null, null, null, null, sliderSwiper);
    const a2SlideSwiper = createNewElement("a", null, "#", null, null, null, null, slide2Swiper);
    const img2SlideSwiper = createNewElement("img", "slade_img", null, "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/dacha_dostavka_2880-new.webp", null, null, null, a2SlideSwiper);
    const slide3Swiper = createNewElement("div", "slide", null, null, null, null, null, sliderSwiper);
    const a3SlideSwiper = createNewElement("a", null, "#", null, null, null, null, slide3Swiper);
    const img3SlideSwiper = createNewElement("img", "slade_img", null, "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/big_2880_02_073333.webp", null, null, null, a3SlideSwiper);
    const slide4Swiper = createNewElement("div", "slide", null, null, null, null, null, sliderSwiper);
    const a4SlideSwiper = createNewElement("a", null, "#", null, null, null, null, slide4Swiper);
    const img4SlideSwiper = createNewElement("img", "slade_img", null, "https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/bners1/jew_2880_11.webp", null, null, null, a4SlideSwiper);
    const buttonsSliderSwiper = createNewElement("div", "buttons_swiper", null, null, null, null, null, sliderSwiper);
    const buttonLeftSliderSwiper = createNewElement("button", "slider_left", null, null, "<", null, null, buttonsSliderSwiper);
    const buttonRightSliderSwiper = createNewElement("button", "slider_right", null, null, ">", null, null, buttonsSliderSwiper);
    const paginatorSliderSwiper = createNewElement("div", "paginator", null, null, " ", null, null, sliderSwiper);

    //wrapper
    const wrapper = createNewElement("div", "wrapper", null, null, null, null, null, root);
    const containerWrapper = createNewElement("div", "container", null, null, null, null, null, wrapper);
    const h2Wrapper = createNewElement("h2", "wrapper_title", null, null, "Хиты продаж", null, null, containerWrapper);
    const productsWrapper = createNewElement("div", "wrapper_products", null, null, null, null, null, containerWrapper);

    const productWrapper = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper = createNewElement("a", null, "#", null, null, null, null, productWrapper);
    const divImgProductWrapper = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper);
    const imgProductWrapper = createNewElement("img", null, null, "./img/product1.jpg", null, null, null, divImgProductWrapper);
    const infoProductWrapper = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper);
    const pricesProductWrapper = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper);
    const newPriceProductWrapper = createNewElement("span","wrapper_product_price-new", null, null, "80$", null, null, pricesProductWrapper);
    const oldPriceProductWrapper = createNewElement("span", "wrapper_product_price-old", null, null, "100$", null, null, pricesProductWrapper);
    const h3ProductWrapper = createNewElement("h3", "wrapper_product_title", null, null, "Product 1", null, null, infoProductWrapper);
    const buttonProductWrapper = createNewElement("button", "button", null, null, " в корзину", null, null, productWrapper);
}
newElements();