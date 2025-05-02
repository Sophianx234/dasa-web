import { FaArrowRight } from "react-icons/fa6";

/* < src="https://i.ibb.co/0cXhh8Q/photo-43-2024-10-31-06-51-41.jpg"> */
function CTAFooter() {
  return (
    <div>
      <div></div>
      <div className="bg-gradient-to-t from-[#33312eef] relative mix-blend-darken text-center   ">
        <img
          src="https://i.ibb.co/hH6qRBM/photo-31-2024-10-31-06-51-41.jpg"
          alt=""
          className=" object-contain mix-blend-color-burn"
        />
        <div className="absolute top-[50%]  grid-cols-1">
          <div className="grid grid-cols-1 space-y-1">
            <h1 className="font-extrabold text-2xl  text-[#fef4e9]">
              Be Apart Of the Association
            </h1>
            <p className="text-[#fffbf6]  font-poppins leading-6  italic px-4">
            DaSA isn’t just an association. it’s a living testament to the strength and resilience of the Dagbon people. Join us as we celebrate our culture, support each other, and strive for excellence in everything we do.
            </p>
          </div>
            <div className="">

          <div className="absolute   h-10 mt-4 rounded-lg  overflow-hidden      left-0 right-0 mx-4 ml-3 flex border-dasalight border    ">
            <input type="email" className=" w-full indent-6 placeholder:text-dasa-deep" placeholder="subscribe to newsletter" />
            <button className="bg-dasalight absolute right-0 top-0 bottom-0  px-3  border-0 flex gap-1  font-semibold py-1 items-center  text-[#66615c]">
              Ti Chama <FaArrowRight />
            </button>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CTAFooter;
