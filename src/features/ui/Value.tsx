import { ReactElement } from "react";

export type valueProps = {
  icon: ReactElement;
  title: string;
  desc: string;
};

export default function Value({ icon, title, desc }: valueProps) {
  return (
    <div
      className="
        flex flex-col items-center text-center
        p-6 rounded-2xl bg-white shadow-sm hover:shadow-md
        transition-shadow duration-300
      "
    >
      <div className="mb-4">{icon}</div>

      <h2 className="font-Montserrat text-lg font-semibold text-[#2f2d2b]">
        {title}
      </h2>

      <p className="text-sm mt-2 text-[#55524f] leading-6 font-poppins tracking-wide">
        {desc}
      </p>
    </div>
  );
}
