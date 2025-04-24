import { useAppSelector } from "@/features/utils/hooks";
import UploadButton from "../account/UploadButton";
import BriefGallery from "../components/BriefGallery";
import HeaderDashboard from "../components/HeaderDashboard";
import DragZone from "../market/DragZone";

function GalleryPage() {
  const {revealUplaoadUserImage} = useAppSelector(store=>store.nav)
  return (
    <div className="bg-white">
      <HeaderDashboard />
      <UploadButton/>
      {revealUplaoadUserImage&&<DragZone type="images"/>}

      <BriefGallery style="side" />
      
    </div>
  );
}

export default GalleryPage;
