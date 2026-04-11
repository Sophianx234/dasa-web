import React from "react";
import { motion } from "framer-motion";
import { Clipboard, DollarSign, FileText, Layers, MessageCircle, Settings, User, UserCheck, Users, Quote } from "lucide-react";
import Executive from "./Executive";

export const executives = [
  {
    img: "https://i.ibb.co/GvB885g7/Whats-App-Image-2025-04-28-at-15-16-25-19d4eb8f.jpg",
    role: "President",
    name: "Abdul Malik Dasana Nkabo",
    desc: "As students and future leaders, we carry the dreams of Dagbon in our hearts. Our unity, resilience, and dedication today will shape a brighter tomorrow. I encourage every member of DaSA to rise with pride, to lead with compassion, and to never lose sight of the power we hold to make a difference. Together, we are stronger, and together, we will build a Dagbon we can all be proud of.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998216/damian-1_tmzjhd.jpg",
    role: "Vice President",
    name: "Sophian Abdul Rahman",
    desc: "True leadership is found not just in standing at the front, but in lifting others as we move forward. As Vice-President, I urge each of us to believe in the strength of community and collaboration. Let’s nurture friendships, share knowledge, and push one another to reach higher heights. Every step you take today brings Dagbon closer to a future filled with hope, innovation, and unity.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Kamaldeen_rpdspp.jpg",
    role: "Public Relations Officer (PRO)",
    name: "Mohammed Kamaldeen Sa-eed",
    desc: "Communication is the lifeline of every great community. As PRO of DaSA, my vision is to ensure that our story, our achievements, and our aspirations are not just heard but truly understood. In every message we send, every announcement we make, and every representation we give, we carry the image of Dagbon with pride. I encourage every member to be a positive ambassador of DaSA, because the way we speak, write, and present ourselves today will shape how others perceive us tomorrow.",
  },
  {
    img: "https://i.ibb.co/xSwBWpZ/xp-1.jpg",
    role: "Financial Secretary",
    name: "Abdallah Mohammed Muntaqah",
    desc: "Financial wisdom is at the heart of growth, not just for individuals but for communities. At DaSA, we believe that careful planning, transparency, and collective responsibility are key to building lasting impact. I encourage all members to cultivate a spirit of discipline, generosity, and vision — because every wise investment we make today, whether in education, service, or leadership, paves the way for a prosperous Dagbon tomorrow.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998753/Hawa_skizkw.jpg",
    role: "Deputy Financial Secretary",
    name: "Hussein Hawa",
    desc: "Supporting the financial backbone of DaSA is not only a duty but a privilege. As Deputy Financial Secretary, my role is to ensure that our resources are carefully managed, our plans are properly executed, and our future is financially secure. It is through accountability, trust, and collaboration that we can sustain the goals of our association.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Sahnuun-1_ys9qc8.jpg",
    role: "General Secretary",
    name: "Sahnuun Mustapha",
    desc: "Documentation is the memory of every association, and as General Secretary, I am committed to ensuring that DaSA’s journey is carefully recorded and preserved. Through clear communication, proper record-keeping, and transparent reporting, we not only keep our members informed but also leave behind a history that future generations can learn from.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1760617326/tipagra-1_yl3s3p.jpg",
    role: "Organizer",
    name: "Humu-Krusum Tipagra Yussif",
    desc: "Organization is the heartbeat of every vibrant association. As the Organizing Secretary, my goal is to ensure that every DaSA activity is well-structured, impactful, and memorable. I believe that true organization goes beyond logistics — it’s about creating experiences that unite us, strengthen our bond, and reflect the values of Dagbon.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Aamina_d98fzl.jpg",
    role: "Women Commissioner (WOCOM)",
    name: "Abdul Majeed Aamina",
    desc: "The empowerment of women is not just a responsibility, it is a necessity for the growth of any community. As Women Commissioner of DaSA, I strive to create a platform where every female member feels valued, supported, and inspired to lead. Our strength lies in inclusivity, and by championing the voices of women, we strengthen the entire body of DaSA.",
  },
  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997991/Zanjina_mppiem.jpg",
    role: "Deputy Organizer",
    name: "Mohammed Mohammed Yakubu",
    desc: "Every successful association thrives on unity and organization. As Deputy Organizer, my commitment is to ensure that our events, activities, and initiatives are executed with excellence and purpose. Organization is more than just planning; it is about bringing people together, creating lasting memories, and fostering unity through shared experiences.",
  },
];

export const roleIcons: Record<string, { icon: React.ElementType, caption: string }> = {
  "President": { icon: UserCheck, caption: "Leading with vision and integrity" },
  "Vice President": { icon: Users, caption: "Supporting growth and collaboration" },
  "Public Relations Officer (PRO)": { icon: MessageCircle, caption: "Communication is key" },
  "Financial Secretary": { icon: DollarSign, caption: "Managing funds responsibly" },
  "Deputy Financial Secretary": { icon: Clipboard, caption: "Ensuring accountability" },
  "General Secretary": { icon: FileText, caption: "Documenting our journey" },
  "Organizer": { icon: Settings, caption: "Planning and executing events" },
  "Women Commissioner (WOCOM)": { icon: User, caption: "Empowering women in leadership" },
  "Deputy Organizer": { icon: Layers, caption: "Supporting organizational excellence" },
};

function ExecutivesSection() {
  return (
    <section className="w-full bg-[#fef4e9]/30 relative overflow-hidden py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* === HEADER === */}
        <div className="mb-20 md:mb-32 max-w-4xl">
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
            The Executive <br className="hidden md:block" />
            <span className="text-dasadeep/60">Committee.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#33312e]/70 text-lg md:text-xl font-poppins mt-6 max-w-2xl"
          >
            Meet the dedicated leadership team driving the vision and mission of the Dagbon Students Association forward.
          </motion.p>
        </div>

        {/* === MOBILE LAYOUT === */}
        <div className="block lg:hidden space-y-12">
          {executives.map((ex, i) => (
            <Executive
              key={i}
              imgUrl={ex.img}
              role={ex.role}
              name={ex.name}
              desc={ex.desc}
            />
          ))}
        </div>

        {/* === DESKTOP LAYOUT (Sticky Scroll & Cascade) === */}
        <div className="hidden lg:flex flex-col gap-32">
          {executives.map((ex, i) => {
            const IconComponent = roleIcons[ex.role]?.icon;
            const caption = roleIcons[ex.role]?.caption;
            // Determine side based on index for the zigzag effect
            const isImageLeft = i % 2 === 0;

            return (
              <div key={i} className="flex items-start gap-16 xl:gap-24 relative min-h-[80vh]">
                
                {/* --- IMAGE COLUMN (Sticky) --- */}
                <div className={`w-1/2 sticky top-32 ${isImageLeft ? "order-1" : "order-2"}`}>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={ex.img}
                      alt={ex.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle gradient overlay to ensure the image sits deeply in the frame */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </div>

                {/* --- TEXT COLUMN (Scrolling) --- */}
                <div className={`w-1/2 flex flex-col justify-center pt-20 pb-32 ${isImageLeft ? "order-2" : "order-1"}`}>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  >
                    {/* Role & Icon Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
                      {IconComponent && <IconComponent className="w-4 h-4 text-dasadeep" />}
                      <span className="text-sm font-bold tracking-wide uppercase text-[#33312e] font-poppins">
                        {ex.role}
                      </span>
                    </div>

                    {/* Name */}
                    <h2 className="text-4xl xl:text-5xl font-extrabold text-[#33312e] font-rethink leading-tight mb-4">
                      {ex.name}
                    </h2>

                    {/* Caption */}
                    {caption && (
                      <p className="text-dasadeep font-mono text-sm tracking-widest uppercase font-semibold mb-8">
                        {caption} &mdash;
                      </p>
                    )}

                    {/* Description Blockquote */}
                    <div className="relative">
                      <Quote className="absolute -left-6 -top-4 w-12 h-12 text-[#33312e]/5 rotate-180" />
                      <p className="text-lg xl:text-xl leading-relaxed text-[#33312e]/75 font-poppins relative z-10 text-justify">
                        "{ex.desc}"
                      </p>
                    </div>
                    
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ExecutivesSection;