import SVGLitex from "../ui/SVGLitex"

function Welcome() {
    return (
        <div>
           <p className="text-3xl pt-4 font-mulish">
             Welcome to DaSA  dashboard,  <span className="text-4xl font-mulish italic font-bold text-[#1a1a1ac5]">
                 Damian
                </span>

            </p>
            <SVGLitex type="sticks"/>
        </div>
    )
}

export default Welcome
