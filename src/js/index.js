'use strict'

import { createNewElement, createSwiper, changeCart, getCart } from './module.js';

const root = document.querySelector("#root");
console.log(root);

const URL = "https://669bdbf0276e45187d36ab4a.mockapi.io/product/products_for_online_store";

function newElements() {
    //header
    const header = createNewElement("header", "header", null, null, null, null, null, root);
    const containerHeader = createNewElement("div", "container", null, null, null, null, null, header);
    const wrapHeader = createNewElement("div", "header_wrap", null, null, null, null, null, containerHeader);
    const logoHeader = createNewElement("div", "logo", null, null, null, null, null, wrapHeader);
    const aLogoHeader = createNewElement("a", "a_logo", "#", null, "Wildberries", null, null, logoHeader);
    const inputHeader = createNewElement("div", "input", null, null, null, null, null, wrapHeader);
    const inputSearchHeader = createNewElement("input", "header_search-catalog", null, null, null, "text", "Найти на Wildberries", inputHeader);
    inputHeader.addEventListener('keyup', event => {
        const searchText = event.target.value.toLowerCase();
        document.querySelectorAll(".wrapper_product").forEach(el => {
            if (el.getElementsByClassName("wrapper_product_title")[0].textContent.toLowerCase().includes(searchText)) {
                el.style.display = null;
            } else {
                el.style.display = "none";
            }
        })
    });
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
    
    //Корзина
    const divBasketWrapper = createNewElement("div", "basket-wrapper", null, null, null, null, null, wrapHeader);
    const titleBasketWrapper = createNewElement("div", "title_basket-wrapper", null, null, null, null, null, divBasketWrapper);
    const h3TitleBasketWrapper = createNewElement("h3", "h3__basket-wrapper", null, null, "Корзина", null, null, titleBasketWrapper);
    const buttonAllDeleteBasketWrapper = createNewElement("button","button_basket_all-delete", null, null, "Очистить всё", null, null, titleBasketWrapper);
    buttonAllDeleteBasketWrapper.addEventListener("click",() => {
        cart = [];
        updateBasketWrapper(cart);
    })
    const buttonCloseBasketWrapper = createNewElement("button","button_basket_close", null, null, "×", null, null, titleBasketWrapper);
    const productsBasketWrapper = createNewElement("div", "products_basket-wrapper", null, null, null, null, null, divBasketWrapper);
    const h2NameProductBasketWrapper = createNewElement("h2", "product-name_basket-wrapper", null, null, "Название товара", null, null, productsBasketWrapper);
    const spanPriceProductBasketWrapper = createNewElement("span", "product-price_basket-wrapper", null, null, "Стоимость товара", null, null, productsBasketWrapper);
    const buttonMinusProductBasketWrapper = createNewElement("button", "basket_buttons_minus_plus", null, null, " − ", null, null, productsBasketWrapper);
    const pProductBasketWrapper = createNewElement("div", "basket_minus_plus", null, null, "0", null, null, productsBasketWrapper);
    const buttonPlusProductBasketWrapper = createNewElement("button", "basket_buttons_minus_plus", null, null, " + ", null, null, productsBasketWrapper);
    const buttonDeleteBasketWrapper = createNewElement("button", "button_basket_delete", null, null, "Удалить", null, null, productsBasketWrapper);
    buttonDeleteBasketWrapper.addEventListener('click', (event) => {
        const productId = parseInt(event.target.closest("product_basket-wrapper").dataset.productId);
        cart = cart.filter(el => el.id!== productId);
        updateBasketWrapper(cart);
    });
    const totalPriceProductBasketWrapper = createNewElement("span", "productsBasketWrapper", null, null, "Итого:", null, null, divBasketWrapper);
    
    //Событие открывания корзины
    aIconHeaderBasket.addEventListener('click', () => {
        divBasketWrapper.style.display = 'flex';
        updateBasketWrapper(cart);
    });

    //Закрытие корзины
    buttonCloseBasketWrapper.addEventListener('click', () => {
        divBasketWrapper.style.display = 'none';
    });
    buttonAllDeleteBasketWrapper.addEventListener('click', () => {
        cart = [];
        updateBasketWrapper(cart);
    });

    //swiper
    createSwiper(root);

    //wrapper
    const wrapper = createNewElement("div", "wrapper", null, null, null, null, null, root);
    const containerWrapper = createNewElement("div", "container", null, null, null, null, null, wrapper);
    const h2Wrapper = createNewElement("h2", "wrapper_title", null, null, "Хиты продаж", null, null, containerWrapper);
    const productsWrapper = createNewElement("div", "wrapper_products", null, null, null, null, null, containerWrapper);

    //Запрос к API
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(product => {
                const productWrapper = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
                const aProductWrapper = createNewElement("a", null, "#", null, null, null, null, productWrapper);
                const divImgProductWrapper = createNewElement("div", "wrapper_product_img", null, null, null, null, null, aProductWrapper);
                const imgProductWrapper = createNewElement("img", null, null, product.img + "?lock=" + product.id, null, null, null, divImgProductWrapper);
                let discount = 0;
                while (discount < 5) {
                    discount = Math.round(Math.random() * 25);
                }
                const discountWrapper = createNewElement("div", "wrapper_discount", null, null, "-" + discount + "%", null, null, divImgProductWrapper);
                const infoProductWrapper = createNewElement("div", "wrapper_product_info", null, null, null, null, null, productWrapper);
                const pricesProductWrapper = createNewElement("div", "wrapper_product_prices", null, null, null, null, null, infoProductWrapper);
                const newPrice = Math.floor((product.old_price - (product.old_price * discount / 100)) * 100) / 100;
                const newPriceProductWrapper = createNewElement("span", "wrapper_product_price-new", null, null, newPrice + "$", null, null, pricesProductWrapper);
                const oldPriceProductWrapper = createNewElement("span", "wrapper_product_price-old", null, null, product.old_price + "$", null, null, pricesProductWrapper);
                const aTextProductWrapper = createNewElement("a", null, "#", null, null, null, null, infoProductWrapper);
                const h3ProductWrapper = createNewElement("h3", "wrapper_product_title", null, null, product.name_for_product, null, null, aTextProductWrapper);
                const spanProductWrapper = createNewElement("span", "product_description", null, null, product.description, null, null, aTextProductWrapper);
                
                //buttons
                let count = getCart()[product.id];
                if (count === undefined) {
                    count = 0;
                }
                const quantityProductWrapper = createNewElement("div", "quantity_wrapper", null, null, null, null, null, productWrapper);
                const buttonMinusProduct = createNewElement("button", "buttons_minus_plus", null, null, " − ", null, null, quantityProductWrapper);
                const pProductWrapper = createNewElement("div", "minus_plus", null, null, count.toString(), null, null, quantityProductWrapper);
                const buttonPlusProduct = createNewElement("button", "buttons_minus_plus", null, null, " + ", null, null, quantityProductWrapper);
                const buttonProductWrapper = createNewElement("button", "button", null, null, "в корзину", null, null, productWrapper);

                buttonMinusProduct.addEventListener('click', event => {
                    if (count !== 0) {
                        pProductWrapper.textContent = (--count).toString();
                        if (buttonProductWrapper.getAttribute('cart')) {
                            buttonProductWrapper.setAttribute('cart', 'update');
                            buttonProductWrapper.textContent = "обновить корзину";
                        }
                    }
                    if (count === 0 && getCart()[product.id]) {
                        buttonProductWrapper.textContent = "удалить товар";
                        buttonProductWrapper.setAttribute('cart', 'delete');
                    }
                });
                buttonPlusProduct.addEventListener('click', event => {
                    pProductWrapper.textContent = (++count).toString();
                    if (buttonProductWrapper.getAttribute('cart')) {
                        buttonProductWrapper.setAttribute('cart', 'update');
                        buttonProductWrapper.textContent = "обновить корзину";
                    }
                });

                if (getCart()[product.id] !== undefined) {
                    buttonProductWrapper.setAttribute('cart', 'added');
                    buttonProductWrapper.textContent = "перейти к оформлению";
                }
                buttonProductWrapper.addEventListener('click', event => {
                    if (buttonProductWrapper.getAttribute('cart') === "added") {
                        console.log('OPEN CART')
                        return
                    }
                    if (buttonProductWrapper.getAttribute('cart') === "update") {
                        changeCart(product.id, count);
                        buttonProductWrapper.setAttribute('cart', 'added');
                        buttonProductWrapper.textContent = "перейти к оформлению"
                        return
                    }
                    if (buttonProductWrapper.getAttribute('cart') === "delete") {
                        changeCart(product.id, count);
                        buttonProductWrapper.removeAttribute('cart');
                        buttonProductWrapper.textContent = "в корзину"
                        return
                    }
                    if (count !== 0) {
                        changeCart(product.id, count);
                        buttonProductWrapper.setAttribute('cart', 'added');
                        buttonProductWrapper.textContent = "перейти к оформлению"
                    }
                });

            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        })
}
newElements();












