import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, Globe } from "lucide-react";

function BriefAbout() {
  const features = [
    {
      icon: <Users size={28} className="text-dasadeep" />,
      title: "Community",
      description:
        "Connect with fellow students, share experiences, and build lasting friendships.",
    },
    {
      icon: <BookOpen size={28} className="text-dasadeep" />,
      title: "Learning",
      description:
        "Access mentorship, workshops, and resources for academic and personal growth.",
    },
    {
      icon: <Globe size={28} className="text-dasadeep" />,
      title: "Culture",
      description:
        "Celebrate Dagbon heritage and participate in cultural exchange programs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 bg-white border-b-2 border-b-dasalight/50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Section */}
     <motion.div
          className="flex-shrink-0 w-full md:w-1/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://i.ibb.co/9VBBqSG/photo-57-2024-10-31-06-52-36.jpg"
            alt="DaSA Community"
            className="w-full h-auto rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
        {/* Text Content + Features */}
        <motion.div
          className="flex-1 flex flex-col justify-center space-y-8 w-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Header Area */}
          <div className="space-y-4 text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-[#fff4e6] text-dasadeep text-xs font-bold tracking-widest uppercase rounded-full">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-Montserrat font-extrabold text-[#33312e] leading-tight">
              About DaSA
            </h2>
            <p className="text-base md:text-lg leading-relaxed sm:pr-11 text-gray-600 max-w-2xl mx-auto lg:mx-0">
              The Dagbon Students Association (DaSA), University of Ghana branch
              is a vibrant community that brings together students from Dagbon and
              beyond to celebrate our rich heritage, foster unity, and empower
              academic and personal growth.
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-[#33312e] text-white px-6 py-3.5 rounded-full font-semibold hover:bg-dasalight hover:text-[#33312e] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Read More
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Features Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-[#fff4e6] transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="mb-2">{feature.icon}</div>
                <h3 className="font-semibold text-lg text-[#33312e]">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}

export default BriefAbout;