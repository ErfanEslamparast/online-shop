import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { BsDashLg } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { useProducts } from '../../../Contexts/Contexts';
const CartItem = ({id,name,price,imgSrc,quantity}) => {
        let{removeFromCart,changeQuantity,faNum}  = useProducts()
    return (
        <div>
            <div className="cart-item col-12 shadow-sm d-flex justify-content-between align-items-center">
                <div className="right-side col-6 d-flex align-items-center justify-content-between">
                <img src={`${imgSrc}.webp`} alt={name} />
                <h6>{name}</h6>
                </div>
                <div className="left-side col-6 d-flex align-items-center justify-content-between px-1">
                    <div className="item-quantity">
                    <button className='plus-btn'><BsPlus size={'1.5em'} onClick={()=>changeQuantity({operator:'INCREASE',id})}/></button>
                    <span className='quantity-number mx-1'>{faNum(quantity)}</span>
                    <button className='minus-btn' disabled={quantity === 1}><BsDashLg onClick={()=>changeQuantity({operator:'DECREASE',id})}/></button><br/>
                    <button className="remove-btn btn btn-outline-danger p-1 my-1"><MdDeleteForever size={'1.3em'} onClick={()=>removeFromCart(id)}/></button>
                    
                    </div>
                    <p><span>{faNum(price)}</span> تومان</p>
                </div>

            </div>
        </div>
    );
}

export default CartItem;
