import { useGetAnnouncements } from "@/features/utils/hooks";
import { announcementResponse } from "@/services/apiServices";
import Announcement from "./Announcement";
import AnnouncementSkeleton from "@/skeletons/AnnouncementSkeleton";

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
      {isLoading && (Array.from({length:3},(_,i)=><AnnouncementSkeleton key={i}/>))}
    </div>
  );
}

export default AnnouncementList;
