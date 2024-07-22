'use strict'

import { createNewElement, createSwiper, changeCart, getCart, updateBasketWrapper, updateCards } from './module.js';

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
    const buttonAllDeleteBasketWrapper = createNewElement("button", "button_basket_all-delete", null, null, "Очистить всё", null, null, titleBasketWrapper);
    const buttonCloseBasketWrapper = createNewElement("button", "button_basket_close", null, null, "×", null, null, titleBasketWrapper);

    buttonAllDeleteBasketWrapper.addEventListener('click', () => {
        document.querySelectorAll(".products_basket-wrapper").forEach(el => {
            el.remove();
            changeCart(0, 0);
        });
    })
    const totalPriceProductBasketWrapper = createNewElement("span", "total-price_basket-wrapper", null, null, "Итого:", null, null, divBasketWrapper);

    //Событие открывания корзины
    aIconHeaderBasket.addEventListener('click', () => {
        divBasketWrapper.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        updateBasketWrapper();
    });

    //Закрытие корзины
    buttonCloseBasketWrapper.addEventListener('click', () => {
        divBasketWrapper.style.display = 'none';
        document.body.style.overflow = 'auto';
        updateCards(getCart('data'));
    });
    buttonAllDeleteBasketWrapper.addEventListener('click', () => {
        cart = [];
        updateBasketWrapper();
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
            localStorage.setItem('data', JSON.stringify(data));
            updateCards(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        })
}
newElements();