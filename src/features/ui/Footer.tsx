import DashNavLinks from "../dashboard/components/DashNavLinks"
import HomepageNavLinks from "./HomepageNavLinks"
import Socials from "./Socials"
import Svg from "./Svg"
export type footerProps = {
    navType?: 'home'| 'dash'
}
function Footer({navType='home'}:footerProps) {
    return (
        <div className="">
            <div className=''>
                <ul className="flex items-center justify-center gap-4 pb-4">
                    {

                     navType === 'home'?   <HomepageNavLinks/>: <DashNavLinks/>
                    }
                </ul>
                <div className="flex items-center flex-col justify-center bg-dasalight  pb-5 space-y-2 ">
                    

<Svg/>
                    
                    


<Socials/>
<p className="pt-4 font-semibold text-gray-600">&copy;Copyright 2024. All Rights Reserved</p>
<h1 className="font-bold font-poppins text-[#66615c] text-xs">Damian X</h1>


                </div>
            </div>
        </div>
    )
}

export default Footer
