import React from 'react';
import './Cart.css'
import CartItem from './CartItem/CartItem';
import { useProducts } from '../../Contexts/Contexts';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Cart = ({showCart,setShowCart}) => {
    const {cart,emptyCart,total,faNum} = useProducts()
    
    return (
        <div className={`cart position-absolute position-md-static ${showCart ? ' show' : ''}`}>
            <div className={`cart-status px-md-4 px-lg-5  ${cart.length === 0 ? 'empty':''}`}>
                <IoMdCloseCircleOutline className='close-btn d-md-none' onClick={()=>setShowCart(false)}/>   
                {cart.length === 0 ? "محصولی در سبد خرید وجود ندارد" 
                :<> شما {faNum(cart.length)} محصول در سبد خرید دارید
                <button className='empty-cart'onClick={emptyCart}><MdOutlineRemoveShoppingCart/></button></>
                }
            </div>


            {cart.map(product => {
              return  <CartItem key={product.id} {...product}/>
            })}


            {cart.length > 0 &&
            <div className="total-section position-sticky">مجموع قیمت:<span className="price ms-1">{faNum(total)} تومان</span></div>
            }
        </div>
    );
}

export default Cart;
