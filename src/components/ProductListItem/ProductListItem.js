import { AddToCartButton } from "../AddToCartButton/AddToCartButton";

const ProductListItem = ({product}) => {
    return ( 
        <div className="product-list-item-container">
            <div>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <div className="images">
                    <img src={product.images[0]}></img>
                    <img src={product.images[1]}></img>
                    <img src={product.images[2]}></img>
                    <img src={product.images[3]}></img>
                </div>
            </div>

            <AddToCartButton/>

        </div>
     );
}
 
export default ProductListItem;