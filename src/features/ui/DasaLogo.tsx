export type logoProps = {
    title: string
}
function DasaLogo({title}:logoProps) {
    return (
        <div className="flex items-center">

            <img src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png" className="w-14" />
            <h1 className="leading-4 border-l-[1px] pl-2 font-semibold border-l-black ">{title.toLowerCase().includes('market')? <>DaSA <br />Market</>:title}</h1>
            </div>
    )
}

export default DasaLogo
