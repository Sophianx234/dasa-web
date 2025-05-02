import { MdFileDownload } from "react-icons/md";

function ConstitutionSection() {
  return (
    <div className=" mx-4 pb-6">
      <h1 className="text-4xl uppercase font-extrabold text-center pb-2  text-[#33312e]">
        Download DaSA <br /> Constitution
      </h1>

      <div className="flex flex-col items-center justify-center">
        <img
          className="w-96"
          src="https://i.ibb.co/nqZ0QJYf/winners-brain-Made-with-Poster-My-Wall.jpg"
          alt="winners-brain-Made-with-Poster-My-Wall"
        />
        <div className=" w-full text-center  ">
          <a
            href="/DRAFTED CONSTITUTION - REVIEW - DAGOMBA STUDENTS-1.pdf"
            className="bg-dasadeep  h-full py-2 font-bold text-lg     border hover:scale-100 border-dasadeep 
             transition-all duration-300 flex items-center justify-center gap-1"
          >
            Download <MdFileDownload className="size-6 mt-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConstitutionSection;
