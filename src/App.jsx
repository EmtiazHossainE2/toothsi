import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import { productList } from './data';

const App = () => {
  const [products,setProducts] = useState(productList)
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Shop products={products} setProducts={setProducts}/>} />
        <Route path='/cart/checkout' element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;