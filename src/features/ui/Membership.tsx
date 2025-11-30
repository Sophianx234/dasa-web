import { FaRegHandshake } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { BsIncognito } from "react-icons/bs";
import { motion } from "framer-motion";

function Membership() {
  const benefits = [
    {
      icon: <FaRegHandshake size={36} className="text-[#ffd8a8]" />,
      title: "Networking & Mentorship",
      description: "Build lifelong connections with mentors and peers who support your journey.",
    },
    {
      icon: <GiGlassCelebration size={36} className="text-[#ffd8a8]" />,
      title: "Cultural Events & Resources",
      description: "Celebrate our culture through exclusive events and resources only available to DaSA members.",
    },
    {
      icon: <CiLock size={36} className="text-[#ffd8a8]" />,
      title: "Exclusive Forums",
      description: "Share ideas, seek advice, and collaborate in member-only forums.",
    },
    {
      icon: <BsIncognito size={36} className="text-[#ffd8a8]" />,
      title: "Anonymous Messaging",
      description: "Express yourself freely with anonymous messaging to other members.",
    },
    {
      icon: <IoStorefrontOutline size={36} className="text-[#ffd8a8]" />,
      title: "DaSA Marketplace",
      description: "Showcase your business, connect with entrepreneurs, and grow within a supportive community.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-r from-[#fff5eb] to-[#fff1d6] py-16 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Background Shape */}
      <div className="absolute -top-20 -left-32 w-96 h-96 rounded-full bg-[#ffd8a8] opacity-20 blur-3xl pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-bold pb-8 sm:pb-0 font-Montserrat text-[#33312e]">
            Why Join DaSA?
          </h2>
          <p className="text-gray-700 text-base hidden sm:block md:text-lg max-w-xl">
            Become a part of our vibrant community and unlock exclusive benefits designed to help you connect, thrive, and succeed.
          </p>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left Image */}
        <motion.div
          className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://i.ibb.co/BN6WBpn/photo-30-2024-10-31-06-53-18.jpg"
          
            alt="DaSA Community"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Right Benefits */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            
          <p className="text-gray-700 text-base md:text-lg max-w-xl sm:hidden block ">
            Become a part of our vibrant community and unlock exclusive benefits designed to help you connect, thrive, and succeed.
          </p>
          

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500 border-l-4 border-[#ffd8a8]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  {benefit.icon}
                  <h3 className="text-lg md:text-xl font-semibold text-[#191611]">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Membership;
