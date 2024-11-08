import Socials from "./Socials"
import Svg from "./Svg"

function Footer() {
    return (
        <div>
            <div className=''>
                <ul className="flex items-center justify-center gap-4 pb-4">
                    <li>About</li>
                    <li>Support</li>
                    <li>Help</li>
                    <li>Signup</li>
                    <li>Login</li>
                </ul>
                <div className="flex items-center flex-col justify-center bg-dasalight ">
                    <Svg/>

<Socials/>


                </div>
            </div>
        </div>
    )
}

export default Footer
