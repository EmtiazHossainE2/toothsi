import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/cart/checkout' element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;