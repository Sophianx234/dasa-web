import ProductNav from "../market/ProductNav"
import EmptyList from "../order/EmptyList"

function UploadedProducts() {
    return (
        <div>
            <ProductNav title="My Products" type="simple"/>
            <EmptyList/>
        </div>
    )
}

export default UploadedProducts
