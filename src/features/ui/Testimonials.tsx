import { motion } from "framer-motion";
import SVGLite from "./SVGLite";
import quote1 from "/q-2.svg";
import quote2 from "/q-3.svg";

export type testimonialProp = {
  testimonial: string;
  name: string;
  role: string;
  img: string;
};

function Testimonial({ testimonial, name, role, img }: testimonialProp) {
  return (
    <motion.div
      className="sm:bg-white rounded-2xl p-6 md:p-8 overflow-hidden sm:shadow-md sm:hover:shadow-xl transition-shadow duration-500 flex flex-col items-center text-center relative space-y-4 md:space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Opening Quote */}

      {/* Testimonial Text */}
      <p className="text-center text-lg md:text-xl font-bold relative z-10 px-4 md:px-2">
      <img
        src={quote2}
        alt="quote"
        className="absolute -top-3 -left-6 w-12 h-12 opacity-30 md:w-10 md:h-10 rotate-6"
      />
        {testimonial}
      <img
        src={quote1}
        alt="quote"
        className="absolute -bottom-3 -right-6 w-12 h-12 opacity-30 md:w-10 md:h-10 rotate-6"
      />
      </p>

      {/* Closing Quote */}

      {/* User Image */}
      <img
        src={img}
        alt={name}
        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-[#ffd8a8] relative z-10"
      />

      {/* Name & Role */}
      <div className="relative z-10">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-xs md:text-sm font-bold text-gray-600">{role}</p>
      </div>

      <SVGLite type="sticks" />
    </motion.div>
  );
}

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
