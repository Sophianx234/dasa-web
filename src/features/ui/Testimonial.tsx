import SVGLite from "./SVGLite"

export type testimonialProp = {
    testimonial:string,
    name: string,
    role: string,
    img: string
}
function Testimonial({testimonial, name,role,img}:testimonialProp) {
    return (
        <div className="space-y-2 text-[#33312e]">
            <h1 className="text-center text-lg px-8 font-bold  ">{testimonial}</h1>
            <div className="flex flex-col justify-center items-center">
                <img src={img} alt="" className="size-14 rounded-full" />
        <div>

            <p className="font-semibold">{name}</p>
            <p className="text-center font-poppins font-bold">{role}</p>
        </div>
            </div>
            <SVGLite/>
        </div>
    )
}

export default Testimonial
