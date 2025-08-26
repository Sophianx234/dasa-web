import Executive from "./Executive";
const executiveImgs = [
    "https://i.ibb.co/GvB885g7/Whats-App-Image-2025-04-28-at-15-16-25-19d4eb8f.jpg",
    "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998216/damian-1_tmzjhd.jpg",
    "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Kamaldeen_rpdspp.jpg",
    "https://i.ibb.co/xSwBWpZ/xp-1.jpg",
    "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755998753/Hawa_skizkw.jpg",
    "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Sahnuun-1_ys9qc8.jpg",
    "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997892/Aamina_d98fzl.jpg",
  "https://res.cloudinary.com/dtytb8qrc/image/upload/v1755997991/Zanjina_mppiem.jpg",
];

/* [
    "https://i.ibb.co/Nd5LtQmL/photo-2025-04-30-00-08-59-2.jpg",
    
    "https://i.ibb.co/8LTbvrXf/Whats-App-Image-2025-04-28-at-14-48-36-76ec3d54.jpg",
    "https://i.ibb.co/GvB885g7/Whats-App-Image-2025-04-28-at-15-16-25-19d4eb8f.jpg",
  ]; */

/*
Initial links 
["https://i.ibb.co/qpPNS9j/D-10.jpg","https://i.ibb.co/xSwBWpZ/xp-1.jpg","https://i.ibb.co/qrwYLWg/photo-22-2024-10-31-06-52-36.jpg","https://i.ibb.co/HV1gNph/xp-2.jpg"] */
function ExecutivesSection() {
  return (
    <div>
      <div>
        <h1 className="text-center text-[#4c4945] font-bold text-lg">
          Executives
        </h1>
        <p className="text-center">
          Meet the dedicated team leading the Dagbon Students Association.
        </p>
        <div className="space-y-12 ">
          <Executive
            imgUrl={executiveImgs[0]}
            role="President"
            name="Abdul Malik Dasana Nkabo "
            desc="As students and future leaders, we carry the dreams of Dagbon in our hearts. Our unity, resilience, and dedication today will shape a brighter tomorrow. I encourage every member of DaSA to rise with pride, to lead with compassion, and to never lose sight of the power we hold to make a difference. Together, we are stronger, and together, we will build a Dagbon we can all be proud of."
          />
          <Executive
            imgUrl={executiveImgs[1]}
            role="Vice President"
            name="Sophian Abdul Rahman"
            desc="True leadership is found not just in standing at the front, but in lifting others as we move forward. As Vice-President, I urge each of us to believe in the strength of community and collaboration. Let’s nurture friendships, share knowledge, and push one another to reach higher heights. Every step you take today brings Dagbon closer to a future filled with hope, innovation, and unity"
          />
<Executive
  imgUrl={executiveImgs[2]}
  role="Public Relations Officer (PRO)"
  name="Mohammed Kamaldeen Sa-eed"
  desc="Communication is the lifeline of every great community. As PRO of DaSA, my vision is to ensure that our story, our achievements, and our aspirations are not just heard but truly understood. In every message we send, every announcement we make, and every representation we give, we carry the image of Dagbon with pride. I encourage every member to be a positive ambassador of DaSA, because the way we speak, write, and present ourselves today will shape how others perceive us tomorrow. Together, let us build a legacy of clarity, respect, and truth."

/>
<Executive
  imgUrl={executiveImgs[3]}
  role="Financial Secretary"
  name="Abdallah Mohammed Muntaqah"
  desc="Financial wisdom is at the heart of growth, not just for individuals but for communities. At DaSA, we believe that careful planning, transparency, and collective responsibility are key to building lasting impact. I encourage all members to cultivate a spirit of discipline, generosity, and vision — because every wise investment we make today, whether in education, service, or leadership, paves the way for a prosperous Dagbon tomorrow."
/>
<Executive
  imgUrl={executiveImgs[4]}
  role="Deputy Financial Secretary"
  name="Hussein Hawa"
  desc="Supporting the financial backbone of DaSA is not only a duty but a privilege. As Deputy Financial Secretary, my role is to ensure that our resources are carefully managed, our plans are properly executed, and our future is financially secure. It is through accountability, trust, and collaboration that we can sustain the goals of our association. I call on all members to uphold the values of honesty and responsibility, because it is only through collective effort that we can build a foundation strong enough to carry the dreams of our generation and the next."

/>
          <Executive
  imgUrl={executiveImgs[5]}
  role="General Secretary"
  name="Sahnuun Mustapha "
  desc="Documentation is the memory of every association, and as General Secretary, I am committed to ensuring that DaSA’s journey is carefully recorded and preserved. Through clear communication, proper record-keeping, and transparent reporting, we not only keep our members informed but also leave behind a history that future generations can learn from. I believe that effective leadership requires both vision and accountability, and I encourage each member to contribute actively so that our collective story becomes one of progress, unity, and excellence."

/>


<Executive
  imgUrl={executiveImgs[6]}
  role="Women Commissioner (WOCOM)"
  name="Abdul Majeed Aamina"
  desc="The empowerment of women is not just a responsibility, it is a necessity for the growth of any community. As Women Commissioner of DaSA, I strive to create a platform where every female member feels valued, supported, and inspired to lead. Our strength lies in inclusivity, and by championing the voices of women, we strengthen the entire body of DaSA. I encourage all members to recognize the importance of gender balance, because when women rise, communities thrive, and together, we build a Dagbon where equality and opportunity are guaranteed for all."

/>


<Executive
  imgUrl={executiveImgs[7]}
  role="Deputy Organizer"
  name="Mohammed Mohammed Yakubu"
  desc="Every successful association thrives on unity and organization. As Deputy Organizer, my commitment is to ensure that our events, activities, and initiatives are executed with excellence and purpose. Organization is more than just planning; it is about bringing people together, creating lasting memories, and fostering unity through shared experiences. I encourage every member to actively participate, because it is through collaboration and teamwork that DaSA will continue to grow stronger and more impactful in shaping the future of Dagbon."

/>

        </div>
      </div>
    </div>
  );
}

export default ExecutivesSection;
