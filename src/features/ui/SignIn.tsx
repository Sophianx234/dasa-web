import { IoLockClosed } from "react-icons/io5"
import FormInput  from "../ui/FormInput"
import { FaRegUser } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { TbBrandOpenvpn } from "react-icons/tb"
import SVGLite from "./SVGLite"
import { slidesImagesType } from "./Hero"
import { Fade } from "react-slideshow-image"

function SignIn() {
    const slideImages: slidesImagesType[] = [
        
        {
            url: 'https://i.ibb.co/Yfy7hZR/photo-5-2024-10-31-06-51-41.jpg',
            
        },
        {
            url:"https://i.ibb.co/5jHK7HD/IMG-20241107-WA0017.jpg" 
        },
    {
        url: "https://i.ibb.co/BN6WBpn/photo-30-2024-10-31-06-53-18.jpg"
    },
    {
        url: "https://i.ibb.co/y4PdLty/photo-9-2024-10-31-06-50-45.jpg" 
    },
    {
        url:"https://i.ibb.co/SNcNjPD/photo-33-2024-10-31-06-52-36.jpg"  
    },
    {
        url:"https://i.ibb.co/jgk1phW/IMG-20241107-WA0013.jpg"
    },
]
    
    return (
        <div className="flex flex-col  items-center justify-center h-dvh bg-dasalight px-10 text-[60%] space-y-12">
            <SVGLite type="sticks"/>
            <div className="flex   bg-dasadeep shadow-sm   ">
                <form className="flex flex-col px-2 ">
                <h1 className="font-poppins font-semibold text-3xl text-[#33312e] pb-4 pt-4">Login</h1>
                <div className="space-y-3">

                    <FormInput icon={<FaRegUser className="absolute left-2  "/>} type="email" placeholder="Enter Email Address"/>
                    <FormInput icon={<IoLockClosed className="absolute left-2 "/>} type="password" placeholder="Password"/>
                    
                    <div>

            <div className="flex  text-xs gap-2">
                <input type="checkbox" name="" id="" />
                <p>Remember Me</p>
            </div>
            <Link className="text-blue-900 flex items-center gap-2 pt-2 " to='/forgotPassword'>
            <TbBrandOpenvpn className="size-4 "/>
            <span className="self-end">
            Forgot Password?
                
            </span>
            </Link>
                    </div>
                </div>
                    <button className=" bg-dasadeep mt-3 rounded-sm py-1 ">Log In</button>
                </form>
                <div className="overflow-hidden bg-[#191611c9] max-h-72 max-w-48 w-48 ">

        
                <Fade>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className='bg-[#0000009d]'>
              <div className={`
              flex
    items-center justify-center
    bg-cover
    bg-center
    scale-[1]
    max-h-[25rem] h-[25rem] lg:h-[50rem] lg:max-h-[30rem] ${index===1 &&' '}   border-0 max-w-48 mix-blend-overlay`} style={{  'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Fade>
                
                </div>
            </div>
            <SVGLite type="sticks"/>
        </div>
    )
}

export default SignIn
