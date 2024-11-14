import SVGLitex from "../../ui/SVGLitex"

function Welcome() {
    return (
        <div className="border-2 mx-4 mt-4 shadow-md">
          <div className="px-2 py-2 pb-7">
            <h1 className=" font-mulish font-bold text-lg">Hey Damian 👋</h1>
            <p className="font-poppins tracking-wide ">
            Here's what's happening with your product today
            </p>
            <div className="flex items-center justify-center gap-16">
                <p className="flex flex-col   text-center"><span className="font-bold font-mulish text-lg">
                83</span>  <span className="leading-5 font-mulish font-medium">Anonymous <br /> Messages</span></p>
            
                <p className="flex flex-col text-center"><span className="font-bold font-mulish text-lg">
                83</span> <span className="font-mulish leading-5 font-medium ">Anonymous <br /> Messages</span></p>
            </div>
            
          </div>
        </div>
    )
}

export default Welcome
