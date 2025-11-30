import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BookOpen, Globe } from "lucide-react";

function BriefAbout() {
  const features = [
    {
      icon: <Users size={36} className="text-dasadeep" />,
      title: "Community",
      description: "Connect with fellow students, share experiences, and build lasting friendships.",
    },
    {
      icon: <BookOpen size={36} className="text-dasadeep" />,
      title: "Learning",
      description: "Access mentorship, workshops, and resources for academic and personal growth.",
    },
    {
      icon: <Globe size={36} className="text-dasadeep" />,
      title: "Culture",
      description: "Celebrate Dagbon heritage and participate in cultural exchange programs.",
    },
  ];

  return (
    <section className="py-14 px-4 md:px-16 bg-white border-b-2 border-b-dasalight">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">

        {/* Image */}
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
          className="flex-1 flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-Montserrat font-bold text-center md:text-left text-[#33312e]">
            About DaSA
          </h2>
          <p className="text-center md:text-left text-sm md:text-base leading-6 text-gray-700">
            The Dagbon Students Association (DaSA), University of Ghana branch is a vibrant community that brings together students from Dagbon and beyond to celebrate our rich heritage, foster unity, and empower academic and personal growth.
          </p>

          <Link
            to="/homepage/about"
            className="inline-flex items-center gap-2 bg-dasalight px-4 py-2 rounded-2xl font-semibold text-[rgb(51,49,46)] hover:bg-[#ffd8a8] transition-colors duration-300 w-max mx-auto md:mx-0"
          >
            Read More
            <FaArrowRight />
          </Link>

          {/* Features Section */}
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
                <h3 className="font-semibold text-lg text-[#33312e]">{feature.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BriefAbout;
