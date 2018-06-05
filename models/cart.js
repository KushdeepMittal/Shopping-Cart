module.exports = function Cart(cart) {
    //here this is cart..ie an empty array of objects
    // this.items is an array of objects
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        // cartItem is a pointer reffering to that index id in array
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, price: 0};
            // item is product from products.json
        }
        cartItem.quantity++;
        
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.price;
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};