import { ReactElement } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { eventI, eventsI } from './Events';
import Event from './Event';

export type sliderMainProps={
  events: eventI[],
  direction?: 'vertical'| 'horizontal' 
}

export default function SliderMain({events,direction='horizontal'}:sliderMainProps) {
  return (
    <div className=''>
      <>
      <Swiper
        spaceBetween={direction?.startsWith('h')?30:''}
        direction={direction}
        centeredSlides={direction?.startsWith('h')? true:false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={direction?.startsWith('h')? true :false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper custom-swiper"
        >
        {events.map((event)=><SwiperSlide key={event._id}>{<Event eventInfo={event}/>}</SwiperSlide>)}
        
      </Swiper>
        </>
    </div>
  );
}
