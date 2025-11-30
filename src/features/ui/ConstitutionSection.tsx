import { MdFileDownload } from "react-icons/md";

export default function ConstitutionSection() {
  return (
    <section className="px-6 py-20 md:py-28 mb-4 bg-[#f9f7f4]">
      {/* Heading */}
      <div className="text-center mb-14">
        
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-[#33312e]">
          Download DaSA <br className="hidden md:block" /> Constitution
        </h1>

        

        <p className="mt-4 text-[#595652] max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">
          The document that anchors our purpose, structures our leadership,
          and shapes the character of our community.
        </p>
      </div>

      {/* Two-column layout on large screens */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-14 lg:gap-20
          items-center
        "
      >
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co/nqZ0QJYf/winners-brain-Made-with-Poster-My-Wall.jpg"
            alt="DaSA Constitution Cover"
            className="
              w-72 md:w-[26rem] rounded-2xl shadow-lg
              ring-1 ring-black/5
              hover:shadow-xl hover:-translate-y-1
              transition-all duration-500
            "
          />
        </div>

        {/* Download Card */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2f2d2b] tracking-wide mb-3">
            Access the Constitution
          </h2>

          <p className="text-sm md:text-base text-[#5c5955] leading-relaxed max-w-md font-light mb-6">
            Explore the foundational document that guides DaSA’s mission,
            leadership, and community culture. Download a clean PDF version below.
          </p>

          <a
            href="/draftedConstitution.pdf"
            className="
              inline-flex items-center gap-3
              bg-dasadeep text-white font-semibold md:font-bold
              text-base md:text-lg px-6 py-3
              rounded-xl shadow-sm
              border border-dasadeep
              hover:scale-[1.03] hover:shadow-md
              active:scale-[0.97]
              transition-all duration-300
            "
          >
            <MdFileDownload className="size-6" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
}
