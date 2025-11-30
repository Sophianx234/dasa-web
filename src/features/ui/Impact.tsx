import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { MessageSquare, UsersRound } from "lucide-react";

// Replace with your actual image path
const IMPACT_IMAGE_SRC = "https://i.ibb.co/fpQD24L/photo-8-2024-10-31-06-53-18.jpg";

export default function Impact() {
  const { ref: messagesRef, inView: messagesInView } = useInView({ triggerOnce: true });
  const { ref: usersRef, inView: usersInView } = useInView({ triggerOnce: true });

  return (
    <section className="bg-dasalight py-16">
      {/* Small & Medium Screens */}
      <div className="lg:hidden space-y-6">
        <h2 className="text-center text-2xl font-mulish font-extrabold text-[#33312e] tracking-wide">
          Our Impact in Numbers
        </h2>

        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-center" ref={messagesRef}>
            <p className="font-Montserrat font-bold text-3xl text-[#33312e]">
              {messagesInView ? <CountUp start={0} end={100} duration={3} /> : 0}M
            </p>
            <p className="font-mulish text-sm">Messages sent</p>
          </div>

          <div className="flex flex-col items-center" ref={usersRef}>
            <p className="font-Montserrat font-bold text-3xl text-[#33312e]">
              {usersInView ? <CountUp start={0} end={100} duration={3} /> : 0}+
            </p>
            <p className="font-mulish text-sm">Active users</p>
          </div>
        </div>
      </div>

      {/* Large Screens — Artistic Layout */}
      <div className="hidden lg:flex items-center justify-between max-w-6xl mx-auto px-8">
        {/* Left Image */}
        <div className="w-1/2 pr-10">
          <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={IMPACT_IMAGE_SRC}
              alt="Impact visual"
              className="object-cover scale-105 opacity-95"
            />
          </div>
        </div>

        {/* Right Statistics */}
        <div className="w-1/2 pl-10 space-y-10">
          <h2 className="text-4xl font-chewy font-extrabold text-[#33312e] leading-snug tracking-wide">
            Our Impact in Numbers
          </h2>

          <div className="space-y-10">
            {/* Messages */}
            <div className="flex items-center gap-6" ref={messagesRef}>
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#33312e]/10 shadow-sm">
                <MessageSquare strokeWidth={1.5} className="w-9 h-9 text-[#33312e]" />
              </div>

              <div>
                <p className="text-5xl font-Montserrat font-bold text-[#33312e]">
                  {messagesInView ? <CountUp start={0} end={100} duration={3} /> : 0}M
                </p>
                <p className="font-mulish text-lg text-[#33312e]/80">
                  Messages sent
                </p>
              </div>
            </div>

            {/* Users */}
            <div className="flex items-center gap-6" ref={usersRef}>
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#33312e]/10 shadow-sm">
                <UsersRound strokeWidth={1.5} className="w-9 h-9 text-[#33312e]" />
              </div>

              <div>
                <p className="text-5xl font-Montserrat font-bold text-[#33312e]">
                  {usersInView ? <CountUp start={0} end={100} duration={3} /> : 0}+
                </p>
                <p className="font-mulish text-lg text-[#33312e]/80">
                  Active users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
