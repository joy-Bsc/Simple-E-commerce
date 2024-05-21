import React, { useContext } from 'react';
import logo from '../../images/logo.png'
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className='Header'> 
            <img src={logo}alt=""/>
            <nav>
            <Link to="/account">{loggedInUser.name}</Link>
                <Link to="/shop">Shop</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/manage">Manage Inventory</Link>
            <button onClick={()=> setLoggedInUser({})}>Sign Out</button>
            </nav>
        </div>
    );
};

export default Header;