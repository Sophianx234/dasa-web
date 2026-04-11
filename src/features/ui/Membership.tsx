import { FaRegHandshake } from "react-icons/fa";
import { GiGlassCelebration } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { BsIncognito } from "react-icons/bs";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function Membership() {
  const benefits = [
    {
      icon: <FaRegHandshake size={28} className="text-zinc-900" />,
      title: "Networking & Mentorship",
      description: "Build lifelong connections with mentors and peers who support your journey.",
    },
    {
      icon: <GiGlassCelebration size={28} className="text-zinc-900" />,
      title: "Cultural Events",
      description: "Celebrate our culture through exclusive events and resources only for members.",
    },
    {
      icon: <CiLock size={28} className="text-zinc-900" />,
      title: "Exclusive Forums",
      description: "Share ideas, seek advice, and collaborate in member-only secure forums.",
    },
    {
      icon: <BsIncognito size={28} className="text-zinc-900" />,
      title: "Anonymous Messaging",
      description: "Express yourself freely with anonymous messaging to other members.",
    },
    {
      icon: <IoStorefrontOutline size={28} className="text-zinc-900" />,
      title: "DaSA Marketplace",
      description: "Showcase your business and grow within a supportive entrepreneur community.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#fffdfa] to-[#fff4e6] py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      
      {/* Decorative Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffd8a8] opacity-20 blur-[120px] rounded-full pointer-events-none -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffd8a8] opacity-15 blur-[100px] rounded-full pointer-events-none -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Unified Header Section */}
        <motion.div 
          className="text-center md:text-left mb-12 lg:mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#fff4e6] text-dasadeep text-sm font-bold tracking-widest uppercase rounded-full mb-4 shadow-sm">
            Membership
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-Montserrat text-[#33312e] mb-6 leading-tight">
            Why Join DaSA?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Become a part of our vibrant community and unlock exclusive benefits designed to help you connect, thrive, and succeed.
          </p>
        </motion.div>

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">

          {/* Left Side: Styled Image */}
          <motion.div
            className="w-full lg:w-5/12 relative group"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Offset Decorative Backdrop */}
            <div className="absolute inset-0 bg-[#ffd8a8] rounded-3xl rotate-3 group-hover:rotate-2 transition-transform duration-500 opacity-60"></div>
            
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://i.ibb.co/BN6WBpn/photo-30-2024-10-31-06-53-18.jpg"
                alt="DaSA Community"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#33312e]/50 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Right Side: Benefits Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              
              {/* Render the 5 Benefits */}
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 hover:border-[#ffd8a8] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="bg-[#fff8f0] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ffd8a8] group-hover:scale-110 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#33312e] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
              
              {/* 6th Item: Call to Action Card to perfectly balance the 2-column grid */}
              <motion.div
                className="bg-[#33312e] p-6 md:p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl group cursor-pointer hover:bg-[#1a1917] transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="w-14 h-14 rounded-full bg-[#ffd8a8]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight size={28} className="text-[#ffd8a8] group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Ready to Join?</h4>
                <p className="text-gray-300 text-sm mb-6">
                  Start your journey with DaSA today.
                </p>
                <button className="bg-[#ffd8a8] text-[#33312e] px-6 py-3 rounded-full font-bold text-sm w-full hover:bg-white transition-colors duration-300 shadow-md">
                  Sign Up Now
                </button>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Membership;