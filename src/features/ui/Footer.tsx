import DashNavLinks from "../dashboard/components/DashNavLinks";
import HomepageNavLinks from "./HomepageNavLinks";
import Socials from "./Socials";
import Svg from "./Svg";

export type FooterProps = {
  navType?: 'home' | 'dash';
};

function Footer({ navType = 'home' }: FooterProps) {
  // Dynamically get the current year so it never goes out of date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative flex flex-col mt-auto overflow-hidden">
      
      {/* --- TOP SECTION: Navigation Links --- */}
      <div className="w-full py-8 md:py-10 px-4 border-t border-[#33312e]/10 dark:border-[#fef4e9]/10">
        <nav aria-label="Footer Navigation">
          {/* flex-wrap ensures links cascade cleanly on small mobile screens */}
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-poppins">
            {navType === 'home' ? <HomepageNavLinks /> : <DashNavLinks />}
          </ul>
        </nav>
      </div>

      {/* --- BOTTOM SECTION: Branding & Socials --- */}
      <div className="bg-dasalight w-full flex flex-col items-center justify-center pt-0 pb-10 relative">
        
        {/* SVG Separator */}
        <div className="w-full  flex justify-center mb-6">
          <Svg />
        </div>

        <div className="flex flex-col items-center space-y-6 z-10 px-4">
          <Socials />
          
          <div className="flex flex-col items-center space-y-3 text-center mt-4">
            {/* Copyright */}
            <p className="text-sm font-semibold text-[#33312e]/80 tracking-wide font-poppins">
              &copy; {currentYear} DaSA. All Rights Reserved.
            </p>
            
            {/* Damian X Signature Stamp */}
            <div className="flex items-center gap-3 mt-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <span className="w-6 h-[1px] bg-[#33312e]/30"></span>
              <p className="font-bold font-mono tracking-[0.2em] text-[#33312e]/70 text-xs uppercase">
                Damian X
              </p>
              <span className="w-6 h-[1px] bg-[#33312e]/30"></span>
            </div>
          </div>
          
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;