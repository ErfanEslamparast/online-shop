import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Filters.css'
import { useProducts } from '../../Contexts/Contexts';
import data from '../../data'


const Filters = () => {
    const {sortPrice,filterByBrand,minPrice, maxPrice,sliderHandler,faNum} = useProducts()
    
    
    
    return (
        <div className='filters-container mb-3 row mt-3 align-items-center justify-content-between px-4'>

            <div className="radio-btns  col-6 col-md-4">
                <div className="title mb-2">مرتب سازی بر اساس</div>
                <input type="radio" name="filter" id="filter1" value={'ex-To-ch'} onChange={sortPrice}/>
                <label className='ms-1' htmlFor="filter1">گرانترین به ارزانترین</label>
                <input className='ms-3' type="radio" name="filter" id="filter2" value={'ch-To-ex'} onChange={sortPrice}/>
                <label className='ms-1' htmlFor="filter2">ارزان ترین به گرانترین</label>
            </div>

            <div className="brands-filter col-6 col-md-4">
            <label >برندها</label>
            <select name="brands" id="brands" onChange={filterByBrand}>
                <option value="all">همه</option>
                {[...new Set(data.map(item => item.brand))].map(brand => (
                     <option key={brand} value={brand}>{brand}</option>
                ))}
                
            </select>
            </div>
                
            <div className="price-filter col-12 col-md-4 mt-2 mt-md-0">
                <p>انتخاب محدوده قیمت موردنظر:</p>
                <Slider onChange={sliderHandler} value={[minPrice,maxPrice]} range  min={1000000} max={150000000} step={100000}/>
                <div className="price-numbers">{faNum(maxPrice)}<span>تومان</span> - {faNum(minPrice)}<span>تومان</span></div>
            </div>
        </div>
    );
}

export default Filters;
