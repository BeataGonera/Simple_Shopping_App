
export const ShoppingCart = ({cartItems}) => {

    return (
        <div>
            {cartItems.map((item) => (
            <div className="shopping-cart-item">
                {item.product.title} - {item.counter}
                <button>Remove</button>
            </div>
      
    ))}

        </div>
    )
}