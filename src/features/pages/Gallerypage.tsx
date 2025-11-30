import BriefGallery from "../dashboard/components/BriefGallery"
import Footer from "../ui/Footer"
import Header from "../ui/Header"

function Gallerypage() {
  return (
    <div className="h-dvh  scrollbar-hide overflow-x-hidden w-dvw">
      <Header />
      <div className="pt-32 ">

        <BriefGallery style="overview"/>
      </div>
      <Footer navType="home" />
      
    </div>
  )
}

export default Gallerypage
