import UploadButton from "../account/UploadButton";
import BriefGallery from "../components/BriefGallery";
import HeaderDashboard from "../components/HeaderDashboard";

function GalleryPage() {
  return (
    <div className="bg-white">
      <HeaderDashboard />
      <BriefGallery style="normal" />
      <UploadButton/>
    </div>
  );
}

export default GalleryPage;
