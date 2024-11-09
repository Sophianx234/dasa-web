export type executiveProps = {
    imgUrl: string,
    name: string,
    role: string,
    desc:string
}
function Executive({name,imgUrl,role,desc}:executiveProps) {
    
    return (
        <div className="flex flex-col justify-center items-center border-b-2 pb-10 border-dasalight">
                        <img src={imgUrl} alt="" className=" h-[15.8rem] w-60 scale-75 rounded-full" />
                        <div className="text-center px-2">
                            <h1 className="text-center font-bold font-mulish text-lg text-[#4c4945]">{name}</h1>
                            <p className="font-bold  font-rethink text-[#4c4945]">{role}</p>
                            <p className="leading-7">{desc}</p>
                        </div>
                    </div>
    )
}

export default Executive
