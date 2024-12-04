import  { ReactElement, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export type sliderMainProps={
  el: ReactElement[],
  direction?: 'vertical'| 'horizontal' 
}

export default function SliderMain({el,direction}:sliderMainProps) {
  return (
    <div className='pt-6'>
      <h1 className='dash-title mx-4 pb-4 '>Events</h1>
      <Swiper
        spaceBetween={30}
        direction={direction}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {el.map((el,i)=><SwiperSlide key={i}>{el}</SwiperSlide>)}
        
      </Swiper>
    </div>
  );
}
