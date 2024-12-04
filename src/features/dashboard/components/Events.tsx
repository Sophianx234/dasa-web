import Event from "./Event"
import SliderMain from "./SliderMain"

function Events() {
    const els =[<Event/>,<Event/>,<Event/>,<Event/>]
    return (
        <div>
      <h1 className='dash-title mx-4  pt-8 '>Events</h1>

            <SliderMain el={els}/>
        </div>
    )
}

export default Events
