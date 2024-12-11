import { BiPackage } from "react-icons/bi"

export type emptyListProps = {
    desc?: string
}
function EmptyList({desc}:emptyListProps) {
    return (
        <div className="pt-36">
        <div className="flex flex-col items-center">

        <BiPackage className="size-24"/>
    <p className="font-semibold text-gray-600">{desc || 'empty'}</p>
        </div>
    
</div>
    )
}

export default EmptyList
