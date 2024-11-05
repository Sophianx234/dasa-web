import { TiTick } from "react-icons/ti"
export type tickProps = {
    title: string,
    subTitle: string
}
function Tick({title,subTitle}: tickProps) {
    return (
        <div>
            <div className="flex items-center">
                    <div className="bg-[#ff922b] rounded-2xl">
                        <TiTick className="size-5 fill-white"/>
                    </div>
                    <div>

                    <h3 className="font-bold font-rethink">{title}</h3>
                    <p className="text-sm">{subTitle}</p>
                    </div>

                </div> 
        </div>
    )
}

export default Tick
