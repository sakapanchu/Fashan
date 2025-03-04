import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assets/banner_women.png';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/frocks' element={<ShopCategory banner ={women_banner}category ="frocks"></ShopCategory>}></Route>
        <Route path='/topskirts' element={<ShopCategory banner ={women_banner} category ="topSkirts"></ShopCategory>}></Route>
        <Route path='/pants' element={<ShopCategory banner ={women_banner}category ="pants"></ShopCategory>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path="/product/:productId" element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
