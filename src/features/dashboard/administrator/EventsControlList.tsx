import { useGetEvents } from "@/features/utils/hooks"
import { eventsI } from "../components/Events"
import Event from "../components/Event"

function EventsControlList() {
  const {isLoading,data} = useGetEvents()
  if(isLoading) return <>isLoading</>
  const {events} = data as eventsI
  return (
    <div className=" space-y-4 pb-32">
      
        {
          events.map(event=><Event type='control' key={event._id} eventInfo={event}/>)
        }

      
      
    </div>
  )
}

export default EventsControlList
