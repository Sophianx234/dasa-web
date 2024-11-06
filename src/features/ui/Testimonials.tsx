import Testimonial from "./Testimonial"

const testimonialImgs = ["https://i.ibb.co/WpNrZ3Q/photo-41-2024-10-31-06-51-41.jpg","https://i.ibb.co/TvB4H0N/photo-93-2024-10-31-06-52-36.jpg","https://i.ibb.co/sH5c2wh/photo-6-2024-10-31-06-53-18.jpg","https://i.ibb.co/hLC8Kkv/photo-24-2024-10-31-06-50-45.jpg","https://i.ibb.co/LdfLkxF/photo-89-2024-10-31-06-52-36.jpg"]
function Testimonials() {
    return (
        <div className="pt-8 bg-primary space-y-6 ">
            <h1 className="text-center font-bold pb-2">Testimonials</h1>
            <Testimonial testimonial="“More than just feeling less
stressed about my finances, I feel
a lot more in control of my life!”" img={testimonialImgs[0]} role="Member" name="Fatimah Mohammed"/>
            <Testimonial testimonial="“More than just feeling less
stressed about my finances, I feel
a lot more in control of my life!”" img={testimonialImgs[1]} role="Member" name="Fatimah Mohammed"/>
            <Testimonial testimonial="“More than just feeling less
stressed about my finances, I feel
a lot more in control of my life!”" img={testimonialImgs[3]} role="Member" name="Fatimah Mohammed"/>
            <Testimonial testimonial="“More than just feeling less
stressed about my finances, I feel
a lot more in control of my life!”" img={testimonialImgs[2]} role="Member" name="Fatimah Mohammed"/>
        </div>
    )
}

export default Testimonials
