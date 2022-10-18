import { AddToCartButton } from "../AddToCartButton/AddToCartButton";

const ProductListItem = ({product, addToCart}) => {


    return ( 
            <div className="item-container">
                <div className="item-details-container">

                    <div className="image-container">
                        <img src={product.images[0]}></img>
                    </div>

                    <div className="name">{product.title}</div>
                    <div className="description">{product.description}</div>
                    
                </div>

            <div className="price-and-button-container">
                <div className="price">{`${product.price} $`}</div>
                <AddToCartButton addToCart={addToCart} product={product}/>
            </div>
        </div>
     );
}
 
export default ProductListItem;