var fullcart = {
    setFull: function() {
        Cookies.set('addtocart', true);
        this.changeImage();
        return true;
    },

    changeImage: function() {
        $('input.view-cart')[0].src = '/img/cart-full.png';
    }
}


$(document).ready(function() {

    fullcart.changeImage();

}.bind(this));