import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Shop from './components/Shop/Shop';
//import Cart from './components/Cart/Cart';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetail/ProductDetails';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AccountInfo from './components/AccountInfo/AccountInfo';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          
          
          <Header></Header>
          <Input></Input>
          <Routes>
          
            <Route path="/shop" element={<Shop />} />
            <Route path="/review" element={<Review />} />
            <Route path="/manage" element={<Inventory />} />
            <Route path="/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shipment" element={<PrivateRoute><Shipment /></PrivateRoute>} />
            <Route path="/account" element={<AccountInfo />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
