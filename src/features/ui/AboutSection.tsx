import AboutParagraph from "./AboutParagraph";
import SVGLite from "./SVGLite";

function AboutSection() {
  return (
      
      <section className="">
        <div className="w-full px-4 md:px-6 py-16">
      <div className="max-w-4xl lg:max-w-5xl mx-auto space-y-14">

        {/* Header */}
        <header className="text-center font-mulish mt-6 mb-4">
          <h1 className="text-2xl md:text-4xl pt-10 font-bold text-[#33312e] tracking-tight leading-tight">
            About Dagbon Students
            <br className="hidden md:block" /> Association
          </h1>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <AboutParagraph
            content="The Dagbon Students Association (DaSA), University of Ghana branch is a vibrant community that brings together students from Dagbon and beyond to celebrate our rich heritage, foster unity, and empower academic and personal growth. This association serves as a proud platform for celebrating the rich cultural heritage, values, and traditions of Dagbon while fostering a sense of unity, leadership, and academic excellence among members."
          />

          <AboutParagraph
            title="Commitment to Building a Welcoming Environment"
            content="DaSA is committed to building a welcoming environment where students can connect, share ideas, create lifelong friendships, and access meaningful opportunities. Through a range of initiatives, including academic workshops, leadership development programs, cultural festivals, networking events, and social impact projects, we empower our members both within and beyond the university setting."
          />

          <AboutParagraph
            title="Commitment Beyond Campus Life"
            content="Beyond campus life, DaSA is deeply committed to making Dagbon a better place. We actively reach out to underserved communities across Dagbon, striving to uplift lives through insightful initiatives, educational support, empowerment programs, and community-driven development projects. We believe in giving back, bridging gaps, and building a stronger future for our people."
            />

          <AboutParagraph
            title="Prioritizing Personal Growth and Well-being"
            content="We also prioritize the personal growth and well-being of our community, promoting mentorship, innovation, entrepreneurship, and civic responsibility. By embracing diversity and inclusivity, DaSA encourages members from all backgrounds to participate, contribute, and thrive."
          />

          <AboutParagraph
            title="Our Vision for Dagbon’s Future"
            content="Our vision is to see a prosperous, united Dagbon where students lead the way in education, innovation, and community transformation. We dream of a future where every student from Dagbon is empowered to achieve their fullest potential, give back to society, and contribute meaningfully to building a vibrant, thriving Dagbon for generations to come."
            />
        </div>

        {/* Artistic SVG Divider */}
        <div className="flex sm:hidden justify-center pt-6">
          <SVGLite type="sticks" />

        </div>
      </div>
            </div>
        <div className="border-b-2 hidden sm:block border-dasalight"/>
    </section>
  );
}

export default AboutSection;
