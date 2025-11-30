import { MdPersonOutline } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CTImages from "./CTImages";
import { ArrowBigRight, ArrowRight } from "lucide-react";

function CTA() {
  const ctaImages = [
    "https://i.ibb.co/d2jtx5G/photo-7-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/YtfKtdq/photo-79-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/fHq4Nnv/photo-72-2024-10-31-06-52-36.jpg",
    "https://i.ibb.co/09h7ZjL/photo-26-2024-10-31-06-51-41.jpg",
    "https://i.ibb.co/dGn3b9b/photo-56-2024-10-31-06-50-45.jpg",
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-[#fff8f0]">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Image Stack */}
        <motion.div
          className="flex flex-wrap justify-center -space-x-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {ctaImages.map((image, idx) => (
            <CTImages
              imageUrl={image}
              key={idx}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
            />
          ))}
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center space-y-3 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold font-Montserrat text-[#33312e]">
            Join <span className="border-b-4 border-dasalight">5,482</span> other Members
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-5">
            Hang out, support each other, and have fun while making a real impact in the Dagbon community and beyond.
          </p>
          
          <Link
            to="signup"
            className="inline-flex items-center gap-2 bg-dasadeep text-[rgb(51,49,46)] font-semibold px-5 py-3 rounded-full text-sm sm:text-base hover:bg-[#ffd8a8] transition-colors duration-300 mt-2"
          >
            Get instant access
            <ArrowRight  size={20} /> 
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
