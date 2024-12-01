import UploadButton from "../account/UploadButton";
import BriefGallery from "../components/BriefGallery";
import HeaderDashboard from "../components/HeaderDashboard";

function GalleryPage() {
  return (
    <div className="bg-white">
      <HeaderDashboard />
      <UploadButton/>

      <BriefGallery style="normal" />
      
    </div>
  );
}

export default GalleryPage;
