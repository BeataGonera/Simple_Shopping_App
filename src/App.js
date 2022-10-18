import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { ShoppingCart } from './components/ShoppingCart/ShoppingCart'
import { useState } from 'react'
import { AddForms } from './components/AddForms/AddForms'
import products from './data/products';


function App() {

  const [view, setView] = useState("LIST")
  const [cart, setCart] = useState([])


  const addToCart = (products) => {
    
    
  }


  return (
    <div className="app">

    <button onClick={() => (setView("LIST"))}>Products</button>
    <button onClick={() => (setView("CART"))}>Cart</button>
    <button onClick={() => (setView("NEW_PRODUCT"))}>New product</button>


      {view === "LIST" && (
        <div> 
          <h1>Lista produktów</h1>
          <div><ProductList /></div>
        </div>
      )}
      {view === "CART" && (
        <div>
          <h1>Koszyk</h1>
          <div><ShoppingCart /></div>
        </div>
      )}
      {view === "NEW_PRODUCT" && (
        <div>
          <h1>Dodaj produkt</h1>
          <AddForms />
        </div>
      )}
    </div>
  );
}

export default App;


