import { useGetEvents } from "@/features/utils/hooks"
import { eventsI } from "../components/Events"
import Event from "../components/Event"
import EventSkeleton from "@/skeletons/EventSkeleton"

function EventsControlList() {
  const {isLoading,data} = useGetEvents()
  
  return (
    <div className=" space-y-4 pb-32">
      
         {
          data &&(data as eventsI).events.map(event=><Event type='control' key={event._id} eventInfo={event}/>)
        } 
        {
         isLoading && Array.from({length:3},(_,i)=><EventSkeleton key={i}/>)}

      
      
    </div>
  )
}

export default EventsControlList
