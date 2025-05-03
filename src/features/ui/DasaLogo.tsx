export type logoProps = {
    title: string,
    clns?: string
} 
function DasaLogo({title,clns}:logoProps) {
    return (
        <div className="flex items-center">

            <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" className={`size-20`} />
            <h1 className={`leading-4 border-l-[1px] pl-2 font-semibold border-l-black font-Montserrat py-1 ${clns} `}>{title.toLowerCase().includes('market')? <>DaSA <br />Market</>:<>{title.slice(0,title.indexOf('A'))} <br /> {title.slice(title.indexOf('A'))} </>}</h1>
            </div>
    )
}

export default DasaLogo
