import './Navbar.css'
import logo1 from '../Assets/logo1.png'
import cart_icon from '../Assets/cart_icon.png'
import React, { useState , useContext , useRef} from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
    const[menu,setMenu]= useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();
  return (
    <div className="navbar">
        <div className ="nav-logo">
            <img src ={logo1} alt=""/>

        </div>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration :'none',textDecorationColor:'#F7418F'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("frocks")}}><Link style={{ textDecoration :'none'}}to='/frocks'>Frocks</Link>{menu==='frocks'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("topskirts")}}><Link style={{ textDecoration :'none'}} to ='topskirts'>Tops/Skirts</Link>{menu==='topskirts'?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("pants")}}><Link style={{ textDecoration :'none'}} to='pants'>Pants</Link>{menu==='pants'?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to ='/Login'><button>Login</button></Link>
          <Link to ='/cart'><img src ={cart_icon} alt=""/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      
    </div>
  )
}

export default Navbar
