'use strict'

function getImg() {
document.querySelectorAll('.wrapper_product_img img').forEach(img => {
    img.addEventListener('mouseover', function(e) {
        this.style.transform = 'scale(2)';
        this.style.zIndex = "9998";
    });

    img.addEventListener('mouseout', function(e) {
        this.style.transform = '';
        this.style.zIndex = '';
    });
});
}

setTimeout(getImg, 1000);