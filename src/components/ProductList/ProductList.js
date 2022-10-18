import products from '../../data/products'
import ProductListItem from '../ProductListItem/ProductListItem';

export const ProductList = ({products, addToCart}) => {


    return ( 
        <div className='products-list-container'>
        {products.map((product)=>(
            <div key={product.id} className="item">
                <ProductListItem product={product} addToCart={addToCart}/>
            </div>
        ))}

        </div>
     );
}
 
