
export const AddToCartButton = ({addToCart, product}) => {
    return(
        
        <button onClick={()=> addToCart(product)}>Add to cart</button>
        
    )
}