import React from 'react';
import {useProducts} from '../../../Contexts/Contexts'
import './Product.css'
const Product = ({id,imgSrc,name,price,quantity}) => {
  
  const {addToCart,faNum} = useProducts()
    return (
        <div className="card col-12 col-md-4 shadow-sm" >
    <img className="card-img-top p-2" src={`${imgSrc}.webp`} alt={name}/>
    <div className="card-body">
      <h5 className="card-title mt-3 mb-5">{name}</h5>
      <div className="buy-section d-flex align-items-center justify-content-between my-3">
      <button className='add-to-cart' onClick={()=>addToCart({id,quantity})}>افزودن به سبد خرید</button>
      <span className="product-price">{faNum(price)} تومان</span>
      </div>
    </div>
    </div>
    
    );
}

export default Product;
