import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './AccountInfo.css';

const AccountInfo = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className='style'>
            <h2>Name:{loggedInUser.name}</h2>
            <h4>Email:{loggedInUser.email}</h4>
            <img src={loggedInUser.photo} height={200} alt="" />
              < h4>Phone:{loggedInUser.phone}</h4>

        </div>
    );
};

export default AccountInfo;