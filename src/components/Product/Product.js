import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {img, name, seller, price, stock, id} = props.product;
    
    return (
        <div className='product'>
            <div>
             <img src={img} alt="" />
            </div>

            <div>
            <h4 className='product-name'><Link to={`${id}`}>{name}</Link></h4>
            <p><small>by: {seller}</small></p>
            <p><small>Price ${price}</small></p>
            <p>Only {stock} left in stock</p>
           <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShippingFast}/>
            add to cart
            </button>
            </div>
        </div>
    );
};

export default Product;