import Testimonial from "./Testimonial"

const testimonialImgs = ["https://i.ibb.co/WpNrZ3Q/photo-41-2024-10-31-06-51-41.jpg","https://i.ibb.co/TvB4H0N/photo-93-2024-10-31-06-52-36.jpg","https://i.ibb.co/sH5c2wh/photo-6-2024-10-31-06-53-18.jpg","https://i.ibb.co/hLC8Kkv/photo-24-2024-10-31-06-50-45.jpg","https://i.ibb.co/LdfLkxF/photo-89-2024-10-31-06-52-36.jpg"]
function Testimonials() {
    return (
        <div className="pt-8 bg-dasalight space-y-12 pb-10">
            <h1 className="text-center font-bold pb-2">Testimonials</h1>
            <Testimonial testimonial="“Being part of DaSA has completely transformed my university experience. I’ve built confidence, gained leadership skills, and made friendships that feel like family.”" img={testimonialImgs[0]} role="Member" name="Sualihatu Saeed"/>
            <Testimonial testimonial="“I joined DaSA a few months ago and already feel at home. Everyone is welcoming, and the events help me stay connected to my roots while enjoying campus life.”" img={testimonialImgs[1]} role="Member" name="Mohammed Muntaqah"/>
            <Testimonial testimonial="“DaSA gave me a platform to showcase my small business. I’ve grown my customer base and even found partners to collaborate with. The support here is unmatched.”" img={testimonialImgs[3]} role="Member" name="Osman Tipagra "/>
            <Testimonial testimonial="“In DaSA, I learned that leadership is about service, just like in Dagbon. The respect, unity, and strength of our culture are what drive us forward.”" img={testimonialImgs[2]} role="Member" name="Rukaya Mohammed"/>
        </div>
    )
}

export default Testimonials
