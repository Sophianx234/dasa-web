import { DateAnonymous } from "@/features/utils/helpers"

export type tileProps = {
    title?: string,
    message: string,
    to: string,
    time?: string 

}
function AnonymousTile({message,to,time}:tileProps) {
    const date = DateAnonymous(time as string)
    return (
        <div className="pt-5 space-y-2 ">
            
            <div className="mx-4 border-dasalight border-2 px-4 rounded-md shadow-md pt-2 pb-2">
                

                <div className="">
                    <div className="flex justify-between font-mulish">

                    <h1 className="font-bold text-lg">Anonymous</h1>
                    <p className="font-semibold">{date}</p>
                    
                    </div>
                    <div>
                        <h1 className="font-poppins  text-sm font-semibold">{to}</h1>
                    <p className="font-mulish text-sm">{message}</p>
                    </div>
                    <div>
                        <div className="space-x-4 py-2">
                            <button>confession</button>
                            <button className="bg-dasadeep px-2 rounded-lg ">thoughts</button>
                            <button>feelings</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AnonymousTile
