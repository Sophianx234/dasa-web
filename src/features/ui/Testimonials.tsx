import { motion } from "framer-motion";
import Testimonial from "./Testimonial";


function Testimonials() {
  const testimonialImgs = [
    "https://i.ibb.co/WpNrZ3Q/photo-41-2024-10-31-06-51-41.jpg",
    "https://i.ibb.co/TvB4H0N/photo-93-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/sH5c2wh/photo-6-2024-10-31-06-53-18.jpg",
    "https://i.ibb.co/hLC8Kkv/photo-24-2024-10-31-06-50-45.jpg",
    "https://i.ibb.co/LdfLkxF/photo-89-2024-10-31-06-52-36.jpg",
  ];

  const testimonials = [
    {
      testimonial:
        "Being part of DaSA has completely transformed my university experience. I’ve built confidence, gained leadership skills, and made friendships that feel like family.",
      name: "Sualihatu Saeed",
      role: "Member",
      img: testimonialImgs[0],
    },
    {
      testimonial:
        "I joined DaSA a few months ago and already feel at home. Everyone is welcoming, and the events help me stay connected to my roots while enjoying campus life.",
      name: "Mohammed Muntaqah",
      role: "Member",
      img: testimonialImgs[1],
    },
    {
      testimonial:
        "DaSA gave me a platform to showcase my small business. I’ve grown my customer base and even found partners to collaborate with. The support here is unmatched.",
      name: "Osman Tipagra",
      role: "Member",
      img: testimonialImgs[3],
    },
    {
      testimonial:
        "In DaSA, I learned that leadership is about service, just like in Dagbon. The respect, unity, and strength of our culture are what drive us forward.",
      name: "Rukaya Mohammed",
      role: "Member",
      img: testimonialImgs[2],
    },
  ];

  return (
    <section className="relative py-14 px-4 md:px-16 bg-[#fff5eb] overflow-hidden">
      <h2 className="text-center font-bold text-2xl md:text-4xl mb-10 text-[#33312e]">
        Testimonials
      </h2>

      {/* Decorative Background Shape */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-[#ffd8a8] opacity-20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Small screens: stacked */}
      <div className="flex flex-col md:hidden space-y-8">
        {testimonials.map((t, idx) => (
          <Testimonial key={idx} {...t} />
        ))}
      </div>

      {/* Large screens: horizontal grid with staggered cards */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Testimonial {...t} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
