'use strict'

document.querySelectorAll('.wrapper_product_img img').forEach(img => {
    img.addEventListener('mouseover', function(e) {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.4s';
    });
    
    img.addEventListener('mouseout', function(e) {
        this.style.transform = 'scale(1)';
    });
});