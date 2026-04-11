import { Link } from "react-router-dom";

export type LogoProps = {
  title: string;
  clns?: string; // Standardized from 'clns'
};



export function DasaLogo({ title, clns = "" }: LogoProps) {
  const formatTitle = () => {
    if (title.toLowerCase().includes("market")) {
      return (
        <>
          DaSA <br /> Market
        </>
      );
    }

    const words = title.split(" ");
    if (words.length > 1) {
      const lastWord = words.pop();
      return (
        <>
          {words.join(" ")} <br /> 
          <span className="text-dasadeep">{lastWord}</span>
        </>
      );
    }
    return title;
  };

  return (
    <Link to="/" className={`flex items-center gap-2 sm:gap-3 md:gap-4 ${clns}`}>
      <img
        src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png"
        alt="DaSA Logo"
        // Scaled down image sizes for smaller screens to ensure it all fits
        className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain drop-shadow-sm"
      />
      {/* Removed the 'hidden' class and adjusted text scaling */}
      <h1 className="leading-tight border-l-2 border-zinc-300 pl-2 sm:pl-3 md:pl-4 font-bold font-Montserrat text-zinc-900 text-[10px] xs:text-xs sm:text-sm md:text-base tracking-tight">
        {formatTitle()}
      </h1>
    </Link>
  );
}