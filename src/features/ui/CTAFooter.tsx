import { FaArrowRight } from "react-icons/fa";

function CTAFooter() {
  const imageUrl = "https://i.ibb.co/hH6qRBM/photo-31-2024-10-31-06-51-41.jpg";

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-[#33312e] rounded-xl shadow-2xl overflow-hidden md:flex lg:max-h-[500px]">
        
        {/* === LEFT SIDE: IMAGE WITH DARK OVERLAY === */}
        <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
          <img
            src={imageUrl}
            alt="Association members together"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay to improve contrast */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        {/* === RIGHT SIDE: TEXT AND CTA === */}
        <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center text-center md:text-left relative z-10">
          
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#fef4e9] font-rethink leading-tight mb-4">
            Be A Part of the Association
          </h1>
          
          <p className="text-[#fffbf6] font-poppins text-lg leading-relaxed italic mb-8">
            DaSA isn’t just an association—it’s a living testament to the strength and resilience of the Dagbon people. Join us as we celebrate our culture, support each other, and strive for excellence in everything we do.
          </p>

          {/* === Newsletter Input / CTA === */}
          <div className="w-full max-w-lg mx-auto md:mx-0">
            <div className="flex relative rounded-lg overflow-hidden border border-dasalight shadow-lg">
              <input 
                type="email" 
                className="flex-grow p-3 text-sm text-[#33312e] placeholder:text-gray-500 font-medium focus:ring-2 focus:ring-dasalight focus:outline-none" 
                placeholder="Subscribe to our newsletter" 
                aria-label="Email subscription"
              />
              <button 
                className="absolute inset-y-0 right-0 flex items-center gap-2 px-4 bg-dasalight font-semibold text-[#33312e] whitespace-nowrap hover:bg-[#e8590c] transition duration-300"
              >
                Ti Chama <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CTAFooter;
