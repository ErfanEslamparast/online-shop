import React from 'react';
import { useProducts } from '../../Contexts/Contexts';
import Product from './Product/Product'


const Products = () => {
    let {items} = useProducts()
    
    
    return (
        <section className='products '>
            <span className='number-of-products d-flex ms-3'>تعداد محصولات : {items.length.toLocaleString('fa-IR')}</span>
            <div className="cards mt-3 px-2 row gap-2">
            {
                items.map(product=>{
                return(
                    <Product key={product.id} {...product}/>
                )})
            }
    </div>
        </section >
    );
}

export default Products;
