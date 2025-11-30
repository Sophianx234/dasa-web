import { Clipboard, DollarSign, FileText, Layers, MessageCircle, Settings, User, UserCheck, Users } from "lucide-react";
import Executive from "./Executive";

export const executives = [
  {
    img: "https://i.ibb.co/GvB885g7/Whats-App-Image-2025-04-28-at-15-16-25-19d4eb8f.jpg",
    role: "President",
    name: "Abdul Malik Dasana Nkabo",
    desc:
      "As students and future leaders, we carry the dreams of Dagbon in our hearts. Our unity, resilience, and dedication today will shape a brighter tomorrow. I encourage every member of DaSA to rise with pride, to lead with compassion, and to never lose sight of the power we hold to make a difference. Together, we are stronger, and together, we will build a Dagbon we can all be proud of.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998216/damian-1_tmzjhd.jpg",
    role: "Vice President",
    name: "Sophian Abdul Rahman",
    desc:
      "True leadership is found not just in standing at the front, but in lifting others as we move forward. As Vice-President, I urge each of us to believe in the strength of community and collaboration. Let’s nurture friendships, share knowledge, and push one another to reach higher heights. Every step you take today brings Dagbon closer to a future filled with hope, innovation, and unity.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Kamaldeen_rpdspp.jpg",
    role: "Public Relations Officer (PRO)",
    name: "Mohammed Kamaldeen Sa-eed",
    desc:
      "Communication is the lifeline of every great community. As PRO of DaSA, my vision is to ensure that our story, our achievements, and our aspirations are not just heard but truly understood. In every message we send, every announcement we make, and every representation we give, we carry the image of Dagbon with pride. I encourage every member to be a positive ambassador of DaSA, because the way we speak, write, and present ourselves today will shape how others perceive us tomorrow. Together, let us build a legacy of clarity, respect, and truth.",
  },

  {
    img: "https://i.ibb.co/xSwBWpZ/xp-1.jpg",
    role: "Financial Secretary",
    name: "Abdallah Mohammed Muntaqah",
    desc:
      "Financial wisdom is at the heart of growth, not just for individuals but for communities. At DaSA, we believe that careful planning, transparency, and collective responsibility are key to building lasting impact. I encourage all members to cultivate a spirit of discipline, generosity, and vision — because every wise investment we make today, whether in education, service, or leadership, paves the way for a prosperous Dagbon tomorrow.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998753/Hawa_skizkw.jpg",
    role: "Deputy Financial Secretary",
    name: "Hussein Hawa",
    desc:
      "Supporting the financial backbone of DaSA is not only a duty but a privilege. As Deputy Financial Secretary, my role is to ensure that our resources are carefully managed, our plans are properly executed, and our future is financially secure. It is through accountability, trust, and collaboration that we can sustain the goals of our association. I call on all members to uphold the values of honesty and responsibility, because it is only through collective effort that we can build a foundation strong enough to carry the dreams of our generation and the next.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Sahnuun-1_ys9qc8.jpg",
    role: "General Secretary",
    name: "Sahnuun Mustapha",
    desc:
      "Documentation is the memory of every association, and as General Secretary, I am committed to ensuring that DaSA’s journey is carefully recorded and preserved. Through clear communication, proper record-keeping, and transparent reporting, we not only keep our members informed but also leave behind a history that future generations can learn from. I believe that effective leadership requires both vision and accountability, and I encourage each member to contribute actively so that our collective story becomes one of progress, unity, and excellence.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1760617326/tipagra-1_yl3s3p.jpg",
    role: "Organizer",
    name: "Humu-Krusum Tipagra Yussif",
    desc:
      "Organization is the heartbeat of every vibrant association. As the Organizing Secretary, my goal is to ensure that every DaSA activity is well-structured, impactful, and memorable. I believe that true organization goes beyond logistics — it’s about creating experiences that unite us, strengthen our bond, and reflect the values of Dagbon. Together, through teamwork and dedication, we will continue to make DaSA a beacon of excellence and togetherness.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Aamina_d98fzl.jpg",
    role: "Women Commissioner (WOCOM)",
    name: "Abdul Majeed Aamina",
    desc:
      "The empowerment of women is not just a responsibility, it is a necessity for the growth of any community. As Women Commissioner of DaSA, I strive to create a platform where every female member feels valued, supported, and inspired to lead. Our strength lies in inclusivity, and by championing the voices of women, we strengthen the entire body of DaSA. I encourage all members to recognize the importance of gender balance, because when women rise, communities thrive, and together, we build a Dagbon where equality and opportunity are guaranteed for all.",
  },

  {
    img: "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997991/Zanjina_mppiem.jpg",
    role: "Deputy Organizer",
    name: "Mohammed Mohammed Yakubu",
    desc:
      "Every successful association thrives on unity and organization. As Deputy Organizer, my commitment is to ensure that our events, activities, and initiatives are executed with excellence and purpose. Organization is more than just planning; it is about bringing people together, creating lasting memories, and fostering unity through shared experiences. I encourage every member to actively participate, because it is through collaboration and teamwork that DaSA will continue to grow stronger and more impactful in shaping the future of Dagbon.",
  },
];


export const roleIcons = {
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
    <section className="w-full py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-[#4c4945] font-bold text-xl lg:text-4xl tracking-tight">
            Executives
          </h1>
          <p className="text-[#5a5754] text-sm lg:text-lg max-w-xl mx-auto mt-1">
            Meet the dedicated team leading the Dagbon Students Association.
          </p>
        </div>

        {/* Mobile layout – keep exactly your design */}
        <div className="block lg:hidden space-y-12">
                    {executives.map((ex,i)=><Executive
                    key={i}
            imgUrl={ex.img}
            role={ex.role}
            name={ex.name}
            desc={ex.desc}
          />)
        
}
        </div>

        {/* Large Screen Layout – Artistic + Stylish */}
        

      </div>
      <div className="hidden lg:flex flex-col ">
  {executives.map((ex, i) => {
    const IconComponent = roleIcons[ex.role]?.icon;
    const caption = roleIcons[ex.role]?.caption;

    return (
      <div
  key={i}
  className={`grid grid-cols-[1.5fr_2fr] gap-12 items-center bg-white shadow-lg border border-[#ecebe9] overflow-hidden hover:shadow-2xl transition-shadow duration-500 ${
    i % 2 === 1 ? "bg-dasalight" : ""
  }`}
>
  {/* IMAGE SIDE */}
  <div className={`${i % 2 === 1 ? "order-2" : "order-1"} w-full h-full`}>
    <img
      src={ex.img}
      alt={ex.name}
      className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
    />
  </div>

  {/* TEXT SIDE */}
  <div className={`${i % 2 === 1 ? "order-1" : "order-2"} p-8 flex flex-col justify-center`}>
    <h1 className="text-3xl lg:text-4xl font-extrabold text-[#2c2a27] leading-snug">
      {ex.name}
    </h1>

    <div className="flex items-center gap-3 mt-3 text-[#4f4c48]">
      {IconComponent && (
        <IconComponent className="w-6 h-6 stroke-[1.5] text-[#ff7f50]" />
      )}
      <span className="font-semibold tracking-wide text-lg">{ex.role}</span>
    </div>

    {caption && (
      <p className="text-sm text-[#7a7773] mt-1 mb-4 italic tracking-wider">
        {caption}
      </p>
    )}

    <p className="text-[#5a5a57] text-base leading-relaxed mt-4">
      {ex.desc}
    </p>
  </div>
</div>

    );
  })}
</div>
    </section>
  );
}

export default ExecutivesSection;
