import { Link } from "react-router-dom"
export type dashNavLinksProps = {
    title: string,
    link: string
}
function DashNavLink({link,title}:dashNavLinksProps) {
    return (
        <>
               <Link to={link}>{title}</Link>
              
               
   </>
  
    )
}

export default DashNavLink
