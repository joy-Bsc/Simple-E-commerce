import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart=props.cart;
    //const totalPrice=cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for(let i=0;i<cart.length;i++)
    {
        const product = cart[i];
        total=total+product.price * product.quantity ;
    }
    
    let shipping=0;
    if(total>35){
        shipping=4.99;
    }
    else if(total>15){
        shipping=4.99;
    }

    const tax=Math.round( total/10);

    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items ordered:{cart.length}</p>
            <p><small>Product Cost: {total}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price:{total+shipping+tax}</p>
            <br />  
            {
                props.children
            }
        </div>
    );
};

export default Cart;