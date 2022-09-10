import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';
import { productList } from './data';

const App = () => {
  const [products,setProducts] = useState(productList)
  const [cartItems, setCartItems] = useState({})
  
  // console.log(cartItems);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Shop 
        products={products} 
        setProducts={setProducts}
        cartItems={cartItems}
        setCartItems={setCartItems}
        />} />
        <Route path='/cart/checkout' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
      </Routes>
    </div>
  );
};

export default App;