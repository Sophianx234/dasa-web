export type tileProps = {
    title: string,
    message: string,
    to: string,
    time: string 

}
function AnonymousTile({title,message,to,time,name}:tileProps) {
    return (
        <div className="pt-5 space-y-2">
            
            <div className="mx-4 border-dasalight border-2 px-4 shadow-md pt-2">
                

                <div className="">
                    <div className="flex justify-between font-mulish">

                    <h1 className="font-bold text-lg">Anonymous</h1>
                    <p className="font-semibold">{time}</p>
                    
                    </div>
                    <div>
                        <h1 className="font-poppins  text-sm font-semibold">{to}</h1>
                    <p className="font-mulish text-sm">{message}</p>
                    </div>
                    <div>
                        <div className="space-x-4 py-2">
                            <button>meeting</button>
                            <button className="bg-dasadeep px-2 rounded-lg ">work</button>
                            <button>important</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AnonymousTile
