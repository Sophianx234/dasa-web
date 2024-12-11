import ProductNav from "../market/ProductNav"
import EmptyList from "../order/EmptyList"

function WishListPage() {
    return (
        <div>
            <ProductNav title="My Wish List" type="simple"/>
            <EmptyList/>
        </div>
    )
}

export default WishListPage
