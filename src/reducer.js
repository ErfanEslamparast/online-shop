const reducer = (state,action)=>{
switch (action.type) {
    case 'ex-To-ch':
         let sortedItemsToCheap = state.items.sort((a,b)=> a.price < b.price ? 1 : -1)
         return{...state,items:sortedItemsToCheap}
        
    case 'ch-To-ex':
        let sortedItemsToExpensive = state.items.sort((a,b)=> a.price > b.price ? 1 : -1)
        return{...state,items:sortedItemsToExpensive}   

    case 'FILTER_BRAND' : 
    state.items = state.allItems
    if(action.payload === 'all') return {...state,items:state.allItems}
    let filteredItems = state.items.filter(item => item.brand === action.payload)
    return {...state,items:filteredItems}    

    case 'SLIDER_FILTER':
        state.items = state.allItems
        let filterdItems = state.items.filter(item=> item.price > action.payload.minPrice && item.price < action.payload.maxPrice)
        return {...state,items:filterdItems}

    case 'ADD_TO_CART':
        
       let itemToAdd = state.items.find(item=> item.id === action.payload.id)
       let isExistItem = state.cart.find(item=>item.id === action.payload.id)
       if(itemToAdd){
           if(isExistItem) {
            return {...state,cart:state.cart.map(item=>
                item.id === action.payload.id ? {...item,quantity:item.quantity + 1} : item
            )}
           }else return {...state,cart:[...state.cart,itemToAdd]}
       }
        return state

       case 'REMOVE_FROM_CART':
       let newCart = state.cart.filter(item=> item.id !== action.payload)
        return {...state,cart:newCart}

        case 'INCREASE':
            return {...state,cart:state.cart.map(item=>
                item.id === action.payload ? {...item,quantity:item.quantity + 1} : item
            )}

        case 'DECREASE':
            return {...state,cart:state.cart.map(item=>
                item.id === action.payload && item.quantity > 1 ? {...item,quantity:item.quantity - 1} : item
            )}

        case 'EMPTY_CART':
            return {...state,cart:[]}
        
        case 'TOTAL':
            let total = state.cart.reduce((acc,item)=> acc + item.price * item.quantity,0)
            return {...state,total:total}
    default: return state
        
}
}
export default reducer

//Brand and Slider filters cant filtering together