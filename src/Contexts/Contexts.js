import { useState,createContext,useContext,useReducer,useEffect } from "react";
import data from '../data'
import reducer from '../reducer'
const ProductsContext = createContext();

const initialState = {
    allItems:data,
    items:data,
    cart:[],
    total:0
}

const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const [minPrice, setMinPrice] = useState(1000000);
    const [maxPrice, setMaxPrice] = useState(150000000);

    const faNum = num => {
        return num.toLocaleString('fa-IR')
    }


    const sortPrice = e => {
        dispatch({type:e.target.value})
    }

    const filterByBrand = e => {
        dispatch({type:'FILTER_BRAND',payload:e.target.value})        
    }

    const sliderHandler = value => {
        setMinPrice(value[0])
        setMaxPrice(value[1])
        dispatch({type:'SLIDER_FILTER',payload:{minPrice,maxPrice}})
    }

    const addToCart = productInfos => {
        dispatch({type:'ADD_TO_CART',payload:productInfos})
    }

    const removeFromCart = productId => {
        dispatch({type:'REMOVE_FROM_CART',payload:productId})
    }

    const changeQuantity = changeObj =>{
        dispatch({type:changeObj.operator,payload:changeObj.id})
    }

    const emptyCart = () => {
        dispatch({type:'EMPTY_CART'})
    }
    useEffect(() => {
        dispatch({type:'TOTAL'})
        
    }, [state.cart]);

    const valueForProvider ={...state,sortPrice,filterByBrand,minPrice,
    maxPrice, setMinPrice, setMaxPrice,sliderHandler,addToCart,
    removeFromCart,changeQuantity,emptyCart,faNum}

    return (<ProductsContext.Provider value={valueForProvider}>{children}</ProductsContext.Provider>)
}

const useProducts = ()=>{
    return  useContext(ProductsContext);
}

export {ProductsProvider,useProducts}