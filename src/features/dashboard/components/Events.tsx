import { useGetEvents } from "@/features/utils/hooks";
import SliderMain from "./SliderMain";
import EventSkeleton from "@/skeletons/EventSkeleton";
export type eventI = {
  _id: string;
  eventImage: string;
  title: string;
  eventDate: string;
  venue: string;
  time:string;
  createdAt: string;
  
};
export type eventsI = {
  events: eventI[];
};
function Events() {
  const { data, isLoading } = useGetEvents();
  const { events } = data as eventsI;

  return (
    <div>
      <h1 className="dash-title mx-8  pt-8 ">Events</h1>

     {isLoading && <EventSkeleton />}
     {events && <SliderMain events={events} />}
    </div>
  );
}

export default Events;
