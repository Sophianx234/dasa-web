import CartItem from "../cart/CartItem"
import ProductNav from "../market/ProductNav"

function CartPage() {
    return (
        <div>
            <ProductNav title="My Cart" type="simple"/>
            <CartItem/>
        </div>
    )
}

export default CartPage
