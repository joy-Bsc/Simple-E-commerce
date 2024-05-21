import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleFbSignIn, handleSignIn, handleSignOut, initializeLoginFramework } from './LoginManager';

function Login() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    initializeLoginFramework();
  }, []);


  const SignIn = () => {
    handleSignIn()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        navigate('/shipment');
      })
      .catch(err => console.log(err));
  }

  const signOut = () => {
    handleSignOut()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
      })
      .catch(err => console.log(err));
  }

  const FbSignIn = () => {
    handleFbSignIn()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        navigate('/shipment');
      })
      .catch(err => console.log(err));
  }

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      // Add your logic here
    }
    e.preventDefault();
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      {
        user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
          <button onClick={SignIn}>Sign In</button>
      }
      <br />

      <button onClick={FbSignIn}>Sign In using Facebook</button>

      {
        user.isSignedIn && <div>
          <p>Welcome,{user.name}!</p>
          <p>Your Email:{user.email}</p>
          <img src={user.photo} height={100} alt='' />
        </div>
      }
      <form onSubmit={handleSubmit}>
        <h1>Our own Authentication</h1>
        <p>Name : {user.name}</p>
        <p>Email:{user.email}</p>
        <p>Password:{user.password}</p>
        <input name='name' type='text' onBlur={handleBlur} placeholder='Enter your name' required />
        <br />
        <input type='text' name='email' onBlur={handleBlur} placeholder='Enter your Email' required />
        <br />
        <input type='password' name='password' onBlur={handleBlur} placeholder='Enter your password' required />
        <br />
        <input type='submit' value='Submit' />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
    </div>
  );
}

export default Login;