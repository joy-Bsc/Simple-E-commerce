import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity, id ,price} = props.product;
    const reviewItemStyle = {
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };

    const handleRemove = () => {
        props.removeCart(id);
    };

    return (
        <div style={reviewItemStyle}>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p> <small>${price}</small> </p>
            <br />
            <button className='main-button' onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default ReviewItem;
