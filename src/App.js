import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import './App.css';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import Products from './components/Products/Products.jsx';
import Cart from './components/Cart/Cart';
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from 'react';

function App() {
    const [showCart, setShowCart] = useState(false);
  return (
    <div className="App">
      <Header />
      <Filters />
      <main className='row mt-4 position-relative'>
        <div className="col-12 col-md-9"><Products /></div>
        <div className="cart-show position-absolute d-md-none" onClick={()=>setShowCart(true)}><MdOutlineShoppingCart  /></div>
        <div className=" col-md-3 "><Cart showCart={showCart}setShowCart={setShowCart}/></div>
        {/* position-fixed end-0 */}
      </main>
    </div>
  );
}

export default App;
