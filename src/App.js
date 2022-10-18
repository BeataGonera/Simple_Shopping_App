import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart'
import { useState } from 'react'
import { AddForms } from './components/AddForms/AddForms'
import products from './data/products';


function App() {

  const [view, setView] = useState("LIST")
  const [cartItems, updateCartItems] = useState([])


  const addToCart = (product) => {

    let item = cartItems.find((item) => item.product.id === product.id)
    if(item){
      item.counter++
    }else{
      item = { product:product, counter:1 }
      updateCartItems([...cartItems, item])
    }
  }
    
  return (
    <div className="app">
    
    <div className='nav'>
      <button onClick={() => (setView("LIST"))}>Products</button>
      <button onClick={() => (setView("CART"))}>Cart</button>
      <button onClick={() => (setView("NEW_PRODUCT"))}>New product</button>
    </div>


      {view === "LIST" && (
        <div> 
          <h1>List of products</h1>
          <div><ProductList addToCart={addToCart} products={products}/></div>
        </div>
      )}
      {view === "CART" && (
        <div>
          <h1>Cart</h1>
          <div><ShoppingCart cartItems = {cartItems}/></div>
        </div>
      )}
      {view === "NEW_PRODUCT" && (
        <div>
          <h1>Add new product</h1>
          <AddForms />
        </div>
      )}
    </div>
  );
}

export default App;

