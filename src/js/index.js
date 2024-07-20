'use strict'

const root = document.querySelector("#root");
console.log(root);


//Создание элементов
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
    if (text!== null) {
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
    const span1BurgerHeader = createNewElement("span", null, null, null, null, null,null, burgerHeader);
    const span2BurgerHeader = createNewElement("span", null, null, null, null, null,null, burgerHeader);
    const span3BurgerHeader = createNewElement("span", null, null, null, null, null,null, burgerHeader);
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
    const sliderSwiper = createNewElement("div", "slider", null, null, null, null, null, containerSwiper);
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
        //Карточка товара 1
    const productWrapper = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper = createNewElement("a", null, "#", null, null, null, null, productWrapper);
    const divImgProductWrapper = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper);
    const imgProductWrapper = createNewElement("img", null, null, "./img/product1.jpg", null, null, null, divImgProductWrapper);
    const infoProductWrapper = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper);
    const pricesProductWrapper = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper);
    const newPriceProductWrapper = createNewElement("span","wrapper_product_price-new", null, null, "80$", null, null, pricesProductWrapper);
    const oldPriceProductWrapper = createNewElement("span", "wrapper_product_price-old", null, null, "100$", null, null, pricesProductWrapper);
    const h3ProductWrapper = createNewElement("h3", "wrapper_product_title", null, null, "Product 1", null, null, infoProductWrapper);
    const buttonProductWrapper = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper);
    //Карточка товара 2
    const productWrapper2 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper2 = createNewElement("a", null, "#", null, null, null, null, productWrapper2);
    const divImgProductWrapper2 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper2);
    const imgProductWrapper2 = createNewElement("img", null, null, "./img/product2.jpg", null, null, null, divImgProductWrapper2);
    const infoProductWrapper2 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper2);
    const pricesProductWrapper2 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper2);
    const newPriceProductWrapper2 = createNewElement("span","wrapper_product_price-new", null, null, "90$", null, null, pricesProductWrapper2);
    const oldPriceProductWrapper2 = createNewElement("span", "wrapper_product_price-old", null, null, "120$", null, null, pricesProductWrapper2);
    const h3ProductWrapper2 = createNewElement("h3", "wrapper_product_title", null, null, "Product 2", null, null, infoProductWrapper2);
    const buttonProductWrapper2 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper2);
    //Карточка товара 3
    const productWrapper3 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper3 = createNewElement("a", null, "#", null, null, null, null, productWrapper3);
    const divImgProductWrapper3 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper3);
    const imgProductWrapper3 = createNewElement("img", null, null, "./img/product3.jpg", null, null, null, divImgProductWrapper3);
    const infoProductWrapper3 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper3);
    const pricesProductWrapper3 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper3);
    const newPriceProductWrapper3 = createNewElement("span","wrapper_product_price-new", null, null, "105$", null, null, pricesProductWrapper3);
    const oldPriceProductWrapper3 = createNewElement("span", "wrapper_product_price-old", null, null, "150$", null, null, pricesProductWrapper3);
    const h3ProductWrapper3 = createNewElement("h3", "wrapper_product_title", null, null, "Product 3", null, null, infoProductWrapper3);
    const buttonProductWrapper3 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper3);
    //Карточка товара 4
    const productWrapper4 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper4 = createNewElement("a", null, "#", null, null, null, null, productWrapper4);
    const divImgProductWrapper4 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper4);
    const imgProductWrapper4 = createNewElement("img", null, null, "./img/product4.jpg", null, null, null, divImgProductWrapper4);
    const infoProductWrapper4 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper4);
    const pricesProductWrapper4 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper4);
    const newPriceProductWrapper4 = createNewElement("span","wrapper_product_price-new", null, null, "110$", null, null, pricesProductWrapper4);
    const oldPriceProductWrapper4 = createNewElement("span", "wrapper_product_price-old", null, null, "180$", null, null, pricesProductWrapper4);
    const h3ProductWrapper4 = createNewElement("h3", "wrapper_product_title", null, null, "Product 4", null, null, infoProductWrapper4);
    const buttonProductWrapper4 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper4);
    //Карточка товара 5
    const productWrapper5 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper5 = createNewElement("a", null, "#", null, null, null, null, productWrapper5);
    const divImgProductWrapper5 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper5);
    const imgProductWrapper5 = createNewElement("img", null, null, "./img/product5.jpg", null, null, null, divImgProductWrapper5);
    const infoProductWrapper5 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper5);
    const pricesProductWrapper5 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper5);
    const newPriceProductWrapper5 = createNewElement("span","wrapper_product_price-new", null, null, "120$", null, null, pricesProductWrapper5);
    const oldPriceProductWrapper5 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper5);
    const h3ProductWrapper5 = createNewElement("h3", "wrapper_product_title", null, null, "Product 5", null, null, infoProductWrapper5);
    const buttonProductWrapper5 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper5);
    //Карточка товара 6
    const productWrapper6 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper6 = createNewElement("a", null, "#", null, null, null, null, productWrapper6);
    const divImgProductWrapper6 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper6);
    const imgProductWrapper6 = createNewElement("img", null, null, "./img/product6.jpg", null, null, null, divImgProductWrapper6);
    const infoProductWrapper6 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper6);
    const pricesProductWrapper6 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper6);
    const newPriceProductWrapper6 = createNewElement("span","wrapper_product_price-new", null, null, "130$", null, null, pricesProductWrapper6);
    const oldPriceProductWrapper6 = createNewElement("span", "wrapper_product_price-old", null, null, "220$", null, null, pricesProductWrapper6);
    const h3ProductWrapper6 = createNewElement("h3", "wrapper_product_title", null, null, "Product 6", null, null, infoProductWrapper6);
    const buttonProductWrapper6 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper6);
    //Карточка товара 7
    const productWrapper7 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper7 = createNewElement("a", null, "#", null, null, null, null, productWrapper7);
    const divImgProductWrapper7 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper7);
    const imgProductWrapper7 = createNewElement("img", null, null, "./img/product7.jpg", null, null, null, divImgProductWrapper7);
    const infoProductWrapper7 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper7);
    const pricesProductWrapper7 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper7);
    const newPriceProductWrapper7 = createNewElement("span","wrapper_product_price-new", null, null, "140$", null, null, pricesProductWrapper7);
    const oldPriceProductWrapper7 = createNewElement("span", "wrapper_product_price-old", null, null, "240$", null, null, pricesProductWrapper7);
    const h3ProductWrapper7 = createNewElement("h3", "wrapper_product_title", null, null, "Product 7", null, null, infoProductWrapper7);
    const buttonProductWrapper7 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper7);
    //Карточка товара 8
    const productWrapper8 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper8 = createNewElement("a", null, "#", null, null, null, null, productWrapper8);
    const divImgProductWrapper8 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper8);
    const imgProductWrapper8 = createNewElement("img", null, null, "./img/product8.jpg", null, null, null, divImgProductWrapper8);
    const infoProductWrapper8 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper8);
    const pricesProductWrapper8 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper8);
    const newPriceProductWrapper8 = createNewElement("span","wrapper_product_price-new", null, null, "130$", null, null, pricesProductWrapper8);
    const oldPriceProductWrapper8 = createNewElement("span", "wrapper_product_price-old", null, null, "220$", null, null, pricesProductWrapper8);
    const h3ProductWrapper8 = createNewElement("h3", "wrapper_product_title", null, null, "Product 8", null, null, infoProductWrapper8);
    const buttonProductWrapper8 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper8);
    //Карточка товара 9
    const productWrapper9 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper9 = createNewElement("a", null, "#", null, null, null, null, productWrapper9);
    const divImgProductWrapper9 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper9);
    const imgProductWrapper9 = createNewElement("img", null, null, "./img/product9.jpg", null, null, null, divImgProductWrapper9);
    const infoProductWrapper9 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper9);
    const pricesProductWrapper9 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper9);
    const newPriceProductWrapper9 = createNewElement("span","wrapper_product_price-new", null, null, "150$", null, null, pricesProductWrapper9);
    const oldPriceProductWrapper9 = createNewElement("span", "wrapper_product_price-old", null, null, "250$", null, null, pricesProductWrapper9);
    const h3ProductWrapper9 = createNewElement("h3", "wrapper_product_title", null, null, "Product 9", null, null, infoProductWrapper9);
    const buttonProductWrapper9 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper9);
    //Карточка товара 10
    const productWrapper10 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper10 = createNewElement("a", null, "#", null, null, null, null, productWrapper10);
    const divImgProductWrapper10 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper10);
    const imgProductWrapper10 = createNewElement("img", null, null, "./img/product10.jpg", null, null, null, divImgProductWrapper10);
    const infoProductWrapper10 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper10);
    const pricesProductWrapper10 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper10);
    const newPriceProductWrapper10 = createNewElement("span","wrapper_product_price-new", null, null, "120$", null, null, pricesProductWrapper10);
    const oldPriceProductWrapper10 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper10);
    const h3ProductWrapper10 = createNewElement("h3", "wrapper_product_title", null, null, "Product 10", null, null, infoProductWrapper10);
    const buttonProductWrapper10 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper10);
    //Карточка товара 11
    const productWrapper11 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper11 = createNewElement("a", null, "#", null, null, null, null, productWrapper11);
    const divImgProductWrapper11 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper11);
    const imgProductWrapper11 = createNewElement("img", null, null, "./img/product11.jpg", null, null, null, divImgProductWrapper11);
    const infoProductWrapper11 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper11);
    const pricesProductWrapper11 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper11);
    const newPriceProductWrapper11 = createNewElement("span","wrapper_product_price-new", null, null, "120$", null, null, pricesProductWrapper11);
    const oldPriceProductWrapper11 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper11);
    const h3ProductWrapper11 = createNewElement("h3", "wrapper_product_title", null, null, "Product 11", null, null, infoProductWrapper11);
    const buttonProductWrapper11 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper11);
    //Карточка товара 12
    const productWrapper12 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper12 = createNewElement("a", null, "#", null, null, null, null, productWrapper12);
    const divImgProductWrapper12 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper12);
    const imgProductWrapper12 = createNewElement("img", null, null, "./img/product12.jpg", null, null, null, divImgProductWrapper12);
    const infoProductWrapper12 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper12);
    const pricesProductWrapper12 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper12);
    const newPriceProductWrapper12 = createNewElement("span","wrapper_product_price-new", null, null, "150$", null, null, pricesProductWrapper12);
    const oldPriceProductWrapper12 = createNewElement("span", "wrapper_product_price-old", null, null, "250$", null, null, pricesProductWrapper12);
    const h3ProductWrapper12 = createNewElement("h3", "wrapper_product_title", null, null, "Product 12", null, null, infoProductWrapper12);
    const buttonProductWrapper12 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper12);
    //Карточка товара 13
    const productWrapper13 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper13 = createNewElement("a", null, "#", null, null, null, null, productWrapper13);
    const divImgProductWrapper13 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper13);
    const imgProductWrapper13 = createNewElement("img", null, null, "./img/product13.jpg", null, null, null, divImgProductWrapper13);
    const infoProductWrapper13 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper13);
    const pricesProductWrapper13 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper13);
    const newPriceProductWrapper13 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper13);
    const oldPriceProductWrapper13 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper13);
    const h3ProductWrapper13 = createNewElement("h3", "wrapper_product_title", null, null, "Product 13", null, null, infoProductWrapper13);
    const buttonProductWrapper13 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper13);
    //Карточка товара 14
    const productWrapper14 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper14 = createNewElement("a", null, "#", null, null, null, null, productWrapper14);
    const divImgProductWrapper14 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper14);
    const imgProductWrapper14 = createNewElement("img", null, null, "./img/product14.jpg", null, null, null, divImgProductWrapper14);
    const infoProductWrapper14 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper14);
    const pricesProductWrapper14 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper14);
    const newPriceProductWrapper14 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper14);
    const oldPriceProductWrapper14 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper14);
    const h3ProductWrapper14 = createNewElement("h3", "wrapper_product_title", null, null, "Product 14", null, null, infoProductWrapper14);
    const buttonProductWrapper14 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper14);
    //Карточка товара 15
    const productWrapper15 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper15 = createNewElement("a", null, "#", null, null, null, null, productWrapper15);
    const divImgProductWrapper15 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper15);
    const imgProductWrapper15 = createNewElement("img", null, null, "./img/product15.jpg", null, null, null, divImgProductWrapper15);
    const infoProductWrapper15 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper15);
    const pricesProductWrapper15 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper15);
    const newPriceProductWrapper15 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper15);
    const oldPriceProductWrapper15 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper15);
    const h3ProductWrapper15 = createNewElement("h3", "wrapper_product_title", null, null, "Product 15", null, null, infoProductWrapper15);
    const buttonProductWrapper15 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper15);
    //Карточка товара 16
    const productWrapper16 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper16 = createNewElement("a", null, "#", null, null, null, null, productWrapper16);
    const divImgProductWrapper16 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper16);
    const imgProductWrapper16 = createNewElement("img", null, null, "./img/product16.jpg", null, null, null, divImgProductWrapper16);
    const infoProductWrapper16 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper16);
    const pricesProductWrapper16 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper16);
    const newPriceProductWrapper16 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper16);
    const oldPriceProductWrapper16 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper16);
    const h3ProductWrapper16 = createNewElement("h3", "wrapper_product_title", null, null, "Product 16", null, null, infoProductWrapper16);
    const buttonProductWrapper16 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper16);
    //Карточка товара 17
    const productWrapper17 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper17 = createNewElement("a", null, "#", null, null, null, null, productWrapper17);
    const divImgProductWrapper17 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper17);
    const imgProductWrapper17 = createNewElement("img", null, null, "./img/product17.jpg", null, null, null, divImgProductWrapper17);
    const infoProductWrapper17 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper17);
    const pricesProductWrapper17 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper17);
    const newPriceProductWrapper17 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper17);
    const oldPriceProductWrapper17 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper17);
    const h3ProductWrapper17 = createNewElement("h3", "wrapper_product_title", null, null, "Product 17", null, null, infoProductWrapper17);
    const buttonProductWrapper17 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper17);
    //Карточка товара 18
    const productWrapper18 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper18 = createNewElement("a", null, "#", null, null, null, null, productWrapper18);
    const divImgProductWrapper18 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper18);
    const imgProductWrapper18 = createNewElement("img", null, null, "./img/product18.jpg", null, null, null, divImgProductWrapper18);
    const infoProductWrapper18 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper18);
    const pricesProductWrapper18 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper18);
    const newPriceProductWrapper18 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper18);
    const oldPriceProductWrapper18 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper18);
    const h3ProductWrapper18 = createNewElement("h3", "wrapper_product_title", null, null, "Product 18", null, null, infoProductWrapper18);
    const buttonProductWrapper18 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper18);
    //Карточка товара 19
    const productWrapper19 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper19 = createNewElement("a", null, "#", null, null, null, null, productWrapper19);
    const divImgProductWrapper19 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper19);
    const imgProductWrapper19 = createNewElement("img", null, null, "./img/product19.jpg", null, null, null, divImgProductWrapper19);
    const infoProductWrapper19 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper19);
    const pricesProductWrapper19 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper19);
    const newPriceProductWrapper19 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper19);
    const oldPriceProductWrapper19 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper19);
    const h3ProductWrapper19 = createNewElement("h3", "wrapper_product_title", null, null, "Product 19", null, null, infoProductWrapper19);
    const buttonProductWrapper19 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper19);
    //Карточка товара 20
    const productWrapper20 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper20 = createNewElement("a", null, "#", null, null, null, null, productWrapper20);
    const divImgProductWrapper20 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper20);
    const imgProductWrapper20 = createNewElement("img", null, null, "./img/product20.jpg", null, null, null, divImgProductWrapper20);
    const infoProductWrapper20 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper20);
    const pricesProductWrapper20 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper20);
    const newPriceProductWrapper20 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper20);
    const oldPriceProductWrapper20 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper20);
    const h3ProductWrapper20 = createNewElement("h3", "wrapper_product_title", null, null, "Product 20", null, null, infoProductWrapper20);
    const buttonProductWrapper20 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper20);
    //Карточка товара 21
    const productWrapper21 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper21 = createNewElement("a", null, "#", null, null, null, null, productWrapper21);
    const divImgProductWrapper21 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper21);
    const imgProductWrapper21 = createNewElement("img", null, null, "./img/product21.jpg", null, null, null, divImgProductWrapper21);
    const infoProductWrapper21 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper21);
    const pricesProductWrapper21 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper21);
    const newPriceProductWrapper21 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper21);
    const oldPriceProductWrapper21 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper21);
    const h3ProductWrapper21 = createNewElement("h3", "wrapper_product_title", null, null, "Product 21", null, null, infoProductWrapper21);
    const buttonWrapper21 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper21);
    //Карточка товара 22
    const productWrapper22 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper22 = createNewElement("a", null, "#", null, null, null, null, productWrapper22);
    const divImgProductWrapper22 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper22);
    const imgProductWrapper22 = createNewElement("img", null, null, "./img/product22.jpg", null, null, null, divImgProductWrapper22);
    const infoProductWrapper22 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper22);
    const pricesProductWrapper22 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper22);
    const newPriceProductWrapper22 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper22);
    const oldPriceProductWrapper22 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper22);
    const h3ProductWrapper22 = createNewElement("h3", "wrapper_product_title", null, null, "Product 22", null, null, infoProductWrapper22);
    const buttonWrapper22 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper22);
    //Карточка товара 23
    const productWrapper23 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper23 = createNewElement("a", null, "#", null, null, null, null, productWrapper23);
    const divImgProductWrapper23 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper23);
    const imgProductWrapper23 = createNewElement("img", null, null, "./img/product23.jpg", null, null, null, divImgProductWrapper23);
    const infoProductWrapper23 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper23);
    const pricesProductWrapper23 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper23);
    const newPriceProductWrapper23 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper23);
    const oldPriceProductWrapper23 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper23);
    const h3ProductWrapper23 = createNewElement("h3", "wrapper_product_title", null, null, "Product 23", null, null, infoProductWrapper23);
    const buttonWrapper23 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper23);
    //Карточка товара 24
    const productWrapper24 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper24 = createNewElement("a", null, "#", null, null, null, null, productWrapper24);
    const divImgProductWrapper24 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper24);
    const imgProductWrapper24 = createNewElement("img", null, null, "./img/product24.jpg", null, null, null, divImgProductWrapper24);
    const infoProductWrapper24 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper24);
    const pricesProductWrapper24 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper24);
    const newPriceProductWrapper24 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper24);
    const oldPriceProductWrapper24 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper24);
    const h3ProductWrapper24 = createNewElement("h3", "wrapper_product_title", null, null, "Product 24", null, null, infoProductWrapper24);
    const buttonWrapper24 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper24);
    //Карточка товара 25
    const productWrapper25 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper25 = createNewElement("a", null, "#", null, null, null, null, productWrapper25);
    const divImgProductWrapper25 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper25);
    const imgProductWrapper25 = createNewElement("img", null, null, "./img/product25.jpg", null, null, null, divImgProductWrapper25);
    const infoProductWrapper25 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper25);
    const pricesProductWrapper25 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper25);
    const newPriceProductWrapper25 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper25);
    const oldPriceProductWrapper25 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper25);
    const h3ProductWrapper25 = createNewElement("h3", "wrapper_product_title", null, null, "Product 25", null, null, infoProductWrapper25);
    const buttonWrapper25 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper25);
    //Карточка товара 26
    const productWrapper26 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper26 = createNewElement("a", null, "#", null, null, null, null, productWrapper26);
    const divImgProductWrapper26 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper26);
    const imgProductWrapper26 = createNewElement("img", null, null, "./img/product26.jpg", null, null, null, divImgProductWrapper26);
    const infoProductWrapper26 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper26);
    const pricesProductWrapper26 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper26);
    const newPriceProductWrapper26 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper26);
    const oldPriceProductWrapper26 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper26);
    const h3ProductWrapper26 = createNewElement("h3", "wrapper_product_title", null, null, "Product 26", null, null, infoProductWrapper26);
    const buttonWrapper26 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper26);
    //Карточка товара 27
    const productWrapper27 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper27 = createNewElement("a", null, "#", null, null, null, null, productWrapper27);
    const divImgProductWrapper27 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper27);
    const imgProductWrapper27 = createNewElement("img", null, null, "./img/product27.jpg", null, null, null, divImgProductWrapper27);
    const infoProductWrapper27 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper27);
    const pricesProductWrapper27 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper27);
    const newPriceProductWrapper27 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper27);
    const oldPriceProductWrapper27 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper27);
    const h3ProductWrapper27 = createNewElement("h3", "wrapper_product_title", null, null, "Product 27", null, null, infoProductWrapper27);
    const buttonWrapper27 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper27);
    //Карточка товара 28
    const productWrapper28 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper28 = createNewElement("a", null, "#", null, null, null, null, productWrapper28);
    const divImgProductWrapper28 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper28);
    const imgProductWrapper28 = createNewElement("img", null, null, "./img/product28.jpg", null, null, null, divImgProductWrapper28);
    const infoProductWrapper28 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper28);
    const pricesProductWrapper28 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper28);
    const newPriceProductWrapper28 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper28);
    const oldPriceProductWrapper28 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper28);
    const h3ProductWrapper28 = createNewElement("h3", "wrapper_product_title", null, null, "Product 28", null, null, infoProductWrapper28);
    const buttonWrapper28 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper28);
    //Карточка товара 29
    const productWrapper29 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper29 = createNewElement("a", null, "#", null, null, null, null, productWrapper29);
    const divImgProductWrapper29 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper29);
    const imgProductWrapper29 = createNewElement("img", null, null, "./img/product29.jpg", null, null, null, divImgProductWrapper29);
    const infoProductWrapper29 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper29);
    const pricesProductWrapper29 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper29);
    const newPriceProductWrapper29 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper29);
    const oldPriceProductWrapper29 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper29);
    const h3ProductWrapper29 = createNewElement("h3", "wrapper_product_title", null, null, "Product 29", null, null, infoProductWrapper29);
    const buttonWrapper29 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper29);
    //Карточка товара 30
    const productWrapper30 = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
    const aProductWrapper30 = createNewElement("a", null, "#", null, null, null, null, productWrapper30);
    const divImgProductWrapper30 = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper30);
    const imgProductWrapper30 = createNewElement("img", null, null, "./img/product30.jpg", null, null, null, divImgProductWrapper30);
    const infoProductWrapper30 = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper30);
    const pricesProductWrapper30 = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, productWrapper30);
    const newPriceProductWrapper30 = createNewElement("span","wrapper_product_price-new", null, null, "100$", null, null, pricesProductWrapper30);
    const oldPriceProductWrapper30 = createNewElement("span", "wrapper_product_price-old", null, null, "200$", null, null, pricesProductWrapper30);
    const h3ProductWrapper30 = createNewElement("h3", "wrapper_product_title", null, null, "Product 30", null, null, infoProductWrapper30);
    const buttonWrapper30 = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper30);
}
newElements();






