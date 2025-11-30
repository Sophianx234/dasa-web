import { FaScaleUnbalanced } from "react-icons/fa6";
import { LiaSeedlingSolid, LiaSlideshare } from "react-icons/lia";
import { PiUsersFourFill } from "react-icons/pi";
import Value from "./Value";

export default function Values() {
  return (
    <section className="py-20 px-6 border-b-4 border-b-dasalight">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <h1 className="font-mulish font-extrabold text-3xl md:text-4xl text-[#33312E]">
          What We Stand For
        </h1>
        <p className="text-base md:text-lg text-[#474540]/80 leading-relaxed">
          The values that unite us, inspire our journey, and guide our service to Dagbon and beyond.
        </p>
      </div>

      {/* Values Grid */}
      <div className="
        mt-14 grid gap-10
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      ">
        <Value
          icon={<FaScaleUnbalanced className="size-16 text-[#ffd8a8]" />}
          title="Integrity"
          desc="We uphold honesty, accountability, and transparency in all our actions, believing that true leadership grows from unwavering moral principles."
        />

        <Value
          icon={<LiaSlideshare className="size-16 text-[#ffd8a8]" />}
          title="Teamwork"
          desc="We achieve more together. Through collaboration and mutual respect, we build relationships that empower every member to contribute and succeed."
        />

        <Value
          icon={<PiUsersFourFill className="size-16 text-[#ffd8a8]" />}
          title="Unity & Community"
          desc="We are one family, bonded by shared heritage and purpose. Our strength lies in unity and in creating a welcoming space for all."
        />

        <Value
          icon={<LiaSeedlingSolid className="size-16 text-[#ffd8a8]" />}
          title="Growth & Learning"
          desc="We value lifelong learning and curiosity. Through innovation and adaptability, we inspire growth within and beyond the DaSA community."
        />
      </div>
    </section>
  );
}
