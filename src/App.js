import './App.css';
import { ProductList } from './components/ProductList/ProductList';
import { ProductListItem } from './components/ProductListItem/ProductListItem'

function App() {
  return (
    <div className="app">
      <div>
        <h1>Lista produktów</h1>
        <div><ProductList/></div>
      </div>
      <div>
        <h1>Koszyk</h1>
        <div>TODO: koszyk zakupów</div>
      </div>
    </div>
  );
}

export default App;
