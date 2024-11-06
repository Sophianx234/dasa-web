export type testimonialProp = {
    testimonial:string,
    name: string,
    role: string,
    img: string
}
function Testimonial({testimonial, name,role,img}:testimonialProp) {
    return (
        <div>
            <h1 className="text-center text-lg px-2 font-montserrat font-semibold">{testimonial}</h1>
            <div className="flex flex-col justify-center items-center">
                <img src={img} alt="" className="size-16 rounded-full" />
        <div>

            <p>{name}</p>
            <p>{role}</p>
        </div>
            </div>
        </div>
    )
}

export default Testimonial
