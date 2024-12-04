import Event from "./Event"
import SliderMain from "./SliderMain"

function Events() {
    const els =[<Event/>,<Event/>,<Event/>,<Event/>]
    return (
        <div>
            <SliderMain el={els}/>
        </div>
    )
}

export default Events
