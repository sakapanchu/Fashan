import {React,useContext} from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt ='icon'/>
                <img src={product.image} alt ='icon'/>
                <img src={product.image} alt ='icon'/>
            </div>
            <div className="productdisplay-img">
                <img className='productdispay-main-img'src={product.image} alt ='icon'/>
            </div>
      </div>
      <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="productdisplay-right-star">
        <img src={star_icon} alt ='icon'/>
        <img src={star_icon} alt ='icon'/>
        <img src={star_icon} alt ='icon'/>
        <img src={star_icon} alt ='icon'/>
        <img src={star_dull_icon} alt ='icon'/>
        <p>(122)</p>
       </div>
       <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdispaly-right-price-new">${product.new_price}</div>
       </div>
        <div className="productdispaly-right-description">
        "Introducing our latest collection of premium clothing, designed to elevate your style. "
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdispaly-right-category'><span>Category :</span>Women Frocks</p>
        <p className='productdispaly-right-category'><span>Tags :</span>Mordern , latest , fashionable</p>
      </div>
    </div>
  )
}

export default ProductDisplay
