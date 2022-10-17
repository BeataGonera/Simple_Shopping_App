import products from '../../data/products'
import ProductListItem from '../ProductListItem/ProductListItem';

export const ProductList = () => {
    return ( 
        <div>

        {products.map((product)=>(
            <div key={product.id} className="item">
                <ProductListItem product={product}/>
            </div>
        ))}

        </div>
     );
}
 
