import { useGetAnnouncements } from "@/features/utils/hooks";
import { announcementResponse } from "@/services/apiServices";
import Announcement from "./Announcement";

type announcementListProps = {
  type?: 'admin'|'normal'
}
function AnnouncementList({type='normal'}:announcementListProps) {
  const {data,isLoading} = useGetAnnouncements()
    if(isLoading) return <>loading </>
    if(data) console.log('lll',data)
  return (
    <div>
      {data && (data as announcementResponse).announcements.map(announce=><Announcement type={type} key={announce._id} announce={announce} />)}
    </div>
  );
}

export default AnnouncementList;
