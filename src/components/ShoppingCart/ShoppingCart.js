
export const ShoppingCart = ({cartItems}) => {


    return (
        <div>
            {cartItems.map((item) => (
            <div className="cart-item-container">
                <div className="cart-name-container">
                    <div className="cart-item-name">{item.product.title}</div>
                </div>
                <div className="cart-item-buttons">
                    <button className="minus-counter-button">-</button>
                    <div className="cart-item-counter">{item.counter}</div>
                    <button className="plus-counter-button">+</button>
                    <button className="remove-button">Remove</button>
                </div>

                <div className="cart-item-price">{`${item.product.price} $`}</div>

            </div>
      
    ))}

        </div>
    )
}