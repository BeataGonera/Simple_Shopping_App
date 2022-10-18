import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem"

export const ShoppingCart = ({cart}) => {

    return (
        <div>
            <ShoppingCartItem cart = {cart} />
        </div>
    )
}