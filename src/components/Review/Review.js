import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { useNavigate } from "react-router-dom";


const Review = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate()
   
    const handleAddProduct = () => {
        // setCart([]);
        // deleteShoppingCart();
        navigate('/shipment');
    }

    const removeCart = (productId) => {
        const newCart = cart.filter(pd => pd.id !== productId); // Compare with productId
        
        setCart(newCart);
        removeFromDb(productId);
    }

    useEffect(() => {
        const savedCart = getShoppingCart();
        const productIds = Object.keys(savedCart);

        const cartProducts = productIds.map(id => {
            const product = fakeData.find(pd => pd.id === id);
            product.quantity = savedCart[id];
            return product;
        });
        setCart(cartProducts);
    }, []);

    return (
        <div className='shop-container'>
            <div className='product-container'>   
            <h1>Cart Items: {cart.length}</h1>
            {cart.map(pd => (
                <ReviewItem key={pd.id} product={pd} removeCart={removeCart} />
            ))}   
              </div>
              <div className='cart-container'>
                <Cart cart={cart}>
                    <button  className='main-button' onClick={handleAddProduct}>Proceed Checkout</button>
                     </Cart>
              </div>
        </div>
    );
};

export default Review;
