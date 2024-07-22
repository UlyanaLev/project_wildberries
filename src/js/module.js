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

export function changeCart(id, count) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null || id === 0) {
        cart = {};
    }
    if (count === 0) {
        delete cart[id]
    }
    else {
        cart[id] = count;
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
}

export function getCart(data = 'cart') {
    if (localStorage.getItem(data) !== null) {
        return JSON.parse(localStorage.getItem(data));
    }
    else {
        return {};
    }
}

export function updateCards(data) {
    document.querySelectorAll(".wrapper_product").forEach(el => { el.remove() });
    const productsWrapper = document.querySelector(".wrapper_products");
    data.forEach(product => {
        const productWrapper = createNewElement("div", "wrapper_product", null, null, null, null, null, productsWrapper);
        productWrapper.id = product.id
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
                divBasketWrapper.style.display = 'flex';
                updateBasketWrapper();
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
}

export function updateBasketWrapper() {
    document.querySelectorAll(".products_basket-wrapper").forEach(el => { el.remove() });
    document.querySelector(".total-price_basket-wrapper").remove();
    const divBasketWrapper = document.querySelector(".basket-wrapper");
    let cart = getCart();
    if (Object.keys(cart).length === 0) {
        const totalPriceProductBasketWrapper = createNewElement("span", "total-price_basket-wrapper", null, null, "Корзина пуста", null, null, divBasketWrapper);
        return
    }

    let data = getCart('data');
    if (Object.keys(data).length === 0) {
        return
    }

    let inCart = {}
    let totalPrice = 0
    Object.keys(cart).forEach(el => {
        for (let i = 0; i < data.length; i++) {
            if (el === data[i]['id']) {
                let price = document.getElementById(el).querySelector(".wrapper_product_price-new").textContent.slice(0, -1);
                inCart[el] = {
                    "name_for_product": data[i]['name_for_product'],
                    "description": data[i]['description'],
                    "price": price,
                    "count": cart[el]
                }
                totalPrice = totalPrice + (price * cart[el]);
            }
        }
    })


    Object.keys(inCart).forEach(el => {
        const productsBasketWrapper = createNewElement("div", "products_basket-wrapper", null, null, null, null, null, divBasketWrapper);
        const h2NameProductBasketWrapper = createNewElement("h2", "product-name_basket-wrapper", null, null, inCart[el]["name_for_product"], null, null, productsBasketWrapper);
        const spanPriceProductBasketWrapper = createNewElement("span", "product-price_basket-wrapper", null, null, inCart[el]["price"], null, null, productsBasketWrapper);
        const buttonMinusProductBasketWrapper = createNewElement("button", "basket_buttons_minus_plus", null, null, " − ", null, null, productsBasketWrapper);
        const pProductBasketWrapper = createNewElement("div", "basket_minus_plus", null, null, inCart[el]["count"], null, null, productsBasketWrapper);
        const buttonPlusProductBasketWrapper = createNewElement("button", "basket_buttons_minus_plus", null, null, " + ", null, null, productsBasketWrapper);
        const buttonDeleteBasketWrapper = createNewElement("button", "button_basket_delete", null, null, "Удалить", null, null, productsBasketWrapper);
        buttonDeleteBasketWrapper.addEventListener('click', () => {
            productsBasketWrapper.remove();
            changeCart(el, 0);
            updateBasketWrapper();
        });
        buttonMinusProductBasketWrapper.addEventListener('click', event => {
            if (inCart[el]["count"] === 0) {
                updateBasketWrapper();
            }
            if (inCart[el]["count"] !== 0) {
                changeCart(el, --inCart[el]["count"]);
                updateBasketWrapper();
            }

        });
        buttonPlusProductBasketWrapper.addEventListener('click', event => {
            changeCart(el, ++inCart[el]["count"]);
            updateBasketWrapper();
        });
    });
    totalPrice = Math.floor((totalPrice) * 100) / 100;
    const totalPriceProductBasketWrapper = createNewElement("span", "total-price_basket-wrapper", null, null, "Итого: " + totalPrice + " $", null, null, divBasketWrapper);
}