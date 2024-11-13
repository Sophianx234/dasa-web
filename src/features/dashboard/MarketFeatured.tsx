import { FaStar } from "react-icons/fa6";
export type MarketFeaturedProps = {
    entLogo: string,
    productImgs: Array<string>,
    entName: string,
    industry: string,
    product: string,
    price: number,
    stock: number,

}
function MarketFeatured() {
    return (
        <div>
            <div>
                <img src="https://i.ibb.co/74bb2Sh/business.jpg"/> 
                <div>
                    <div>
                        <div className="flex justify-between  py-2">

                        <h1 className="font-semibold text-lg font-mulish">
                            Damian Corps.
                        </h1>
                        <h1 className="font-sans font-semibold">X industries</h1>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>

                            <p className="font-semibold ">Products</p>
                            <h1 className="font-Montserrat font-semibold">Sneakers &reg;</h1>
                            </div>
                            <h1 className="font-mulish font-bold self-end"><span className="">
                            ₵24.5</span> / item</h1>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                        <img className="w-48" src="https://i.ibb.co/5T0GmMy/sneaker-2.png" alt="sneaker-2" />
                        <img className="w-48" src="https://i.ibb.co/F7K9fjg/sneaker-3.png" alt="sneaker-3" />
                        <img src="https://i.ibb.co/L5Z1hNM/sneaker-4.png" className="w-48" alt="sneaker-4" />
                        <img src="https://i.ibb.co/PcPBVyC/sneaker-1.jpg" className="w-48" alt="sneaker-1" />
                        
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">

                            <p className="font-mulish font-semibold">Stock</p>
                            <h1 className="text-lg font-semibold font-Montserrat">346</h1>
                            </div>
                            <div>

                            <p className="flex items-center  gap-1 pr-3"><FaStar className="fill-[#fcc419]"/><span className="text-lg font-semibold">4.5</span></p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketFeatured
