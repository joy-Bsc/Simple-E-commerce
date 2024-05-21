import React from 'react';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShippingFast } from '@fortawesome/free-solid-svg-icons'
import './Input.css'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Input = (props) => {
    const input=props;
    console.log(props);

    return (
        <div className='input-text'>
            <input type="text" class="search-input" placeholder='type here for search'/>
            <button type="submit"><i class="fa fa-search"></i></button>
            <div className='review'>
                <h3 className='font'><FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
                <p>{input.length}</p>
                </h3>
            </div>
        </div>
    );
};

export default Input;