import React from "react";
import { motion } from "framer-motion";
import { Globe, Users, HeartHandshake, TrendingUp, Target } from "lucide-react";
import AboutParagraph from "./AboutParagraph";
import SVGLite from "./SVGLite";

// Abstracted content with Lucide icons assigned to each chapter
const aboutContent = [
  {
    icon: Globe,
    content: "The Dagbon Students Association (DaSA), University of Ghana branch is a vibrant community that brings together students from Dagbon and beyond to celebrate our rich heritage, foster unity, and empower academic and personal growth. This association serves as a proud platform for celebrating the rich cultural heritage, values, and traditions of Dagbon while fostering a sense of unity, leadership, and academic excellence among members.",
  },
  {
    icon: Users,
    title: "Commitment to Building a Welcoming Environment.",
    content: "DaSA is committed to building a welcoming environment where students can connect, share ideas, create lifelong friendships, and access meaningful opportunities. Through a range of initiatives, including academic workshops, leadership development programs, cultural festivals, networking events, and social impact projects, we empower our members both within and beyond the university setting.",
  },
  {
    icon: HeartHandshake,
    title: "Commitment Beyond Campus Life.",
    content: "Beyond campus life, DaSA is deeply committed to making Dagbon a better place. We actively reach out to underserved communities across Dagbon, striving to uplift lives through insightful initiatives, educational support, empowerment programs, and community-driven development projects. We believe in giving back, bridging gaps, and building a stronger future for our people.",
  },
  {
    icon: TrendingUp,
    title: "Prioritizing Personal Growth and Well-being.",
    content: "We also prioritize the personal growth and well-being of our community, promoting mentorship, innovation, entrepreneurship, and civic responsibility. By embracing diversity and inclusivity, DaSA encourages members from all backgrounds to participate, contribute, and thrive.",
  },
  {
    icon: Target,
    title: "Our Vision for Dagbon’s Future.",
    content: "Our vision is to see a prosperous, united Dagbon where students lead the way in education, innovation, and community transformation. We dream of a future where every student from Dagbon is empowered to achieve their fullest potential, give back to society, and contribute meaningfully to building a vibrant, thriving Dagbon for generations to come.",
  }
];

function AboutSection() {
  return (
    <section className="w-full bg-[#fef4e9]/30 relative overflow-hidden">
      
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">

          {/* === HEADER === */}
          <header className="mb-16 md:mb-24 max-w-4xl">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-1.5 bg-dasadeep/60 mb-8 rounded-full"
            />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#33312e] tracking-tighter leading-[1.05] font-rethink"
            >
              About the Dagbon <br className="hidden md:block" />
              <span className="text-dasadeep/60">Students Association.</span>
            </motion.h1>
          </header>

          {/* === TIMELINE CONTENT LIST === */}
          <div className="w-full max-w-4xl">
            {/* THIS wrapper creates the vertical connecting line */}
            <div className="relative border-l-2 border-gray-200/80 ml-5 md:ml-6">
              {aboutContent.map((item, index) => (
                <AboutParagraph 
                  key={index}
                  index={index}
                  title={item.title}
                  content={item.content}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>

          {/* === FOOTER DECORATION === */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center mt-20 pt-10 border-t border-gray-200/60"
          >
            <div className="opacity-50 sm:hidden block hover:opacity-100 transition-opacity duration-300">
               <SVGLite type="sticks" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;