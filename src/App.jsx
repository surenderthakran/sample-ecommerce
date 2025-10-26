import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Hero from './Components/Hero/Hero';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Routes>
        <Route path='/' element= {<ShopCategory category="shop"/>}/>
        <Route path='/mens' element= {<ShopCategory category="men"/>}/>
        <Route path='/womens' element= {<ShopCategory category="women"/>}/>
        <Route path='/kids' element= {<ShopCategory category="kids"/>}/>
        <Route path='/product' element= {<Product/>}>
          <Route path=':productedID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element= {<Cart/>}/>
        <Route path='/login' element= {<LoginSignup/>}/>

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
