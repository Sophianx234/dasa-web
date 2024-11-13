export type MarketFeaturedProps = {
    entLogo: string,
    products: Array<string>,
    entName: string,
    industry: string
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
                        <div>
                            <p className="font-semibold">Products</p>
                            <h1>1.7 ETH</h1>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2">
                        <img className="w-48" src="https://i.ibb.co/5T0GmMy/sneaker-2.png" alt="sneaker-2" />
                        <img className="w-48" src="https://i.ibb.co/F7K9fjg/sneaker-3.png" alt="sneaker-3" />
                        <img src="https://i.ibb.co/L5Z1hNM/sneaker-4.png" className="w-48" alt="sneaker-4" />
                        <img src="https://i.ibb.co/PcPBVyC/sneaker-1.jpg" className="w-48" alt="sneaker-1" />
                        
                        </div>
                        <div>
                            <div>

                            <p>Stock</p>
                            <h1>346</h1>
                            </div>
                            <div>

                            <p>Bid</p>
                            <h1>2.5 ETH</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketFeatured
