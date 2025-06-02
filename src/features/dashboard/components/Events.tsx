import { useGetEvents } from "@/features/utils/hooks";
import SliderMain from "./SliderMain";
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
  if (isLoading) return <>loading</>;
  const { events } = data as eventsI;

  console.log("EVENTS", data);
  return (
    <div>
      <h1 className="dash-title mx-8  pt-8 ">Events</h1>

      <SliderMain events={events} />
    </div>
  );
}

export default Events;
