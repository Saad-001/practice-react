import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total= 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total  = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.94
    }
    let tax = (total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h1>Order summery</h1>
            <h5>Items orderd : {cart.length}</h5>
            <h4>Product Price : {formatNumber(total)}</h4>
            <p>Shipping Charge : {shipping}</p>
            <p>Tax + VAT : {tax}</p>
            <h3>Total Cost : {grandTotal}</h3>

        </div>
    );
};

export default Cart;