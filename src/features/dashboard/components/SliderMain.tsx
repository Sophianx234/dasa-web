import { ReactElement } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css.min.css';
import 'swiper/css/navigation.min.css';
import 'swiper/css/pagination.min.css';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export type sliderMainProps={
  el: ReactElement[] | string[],
  direction?: 'vertical'| 'horizontal' 
}

export default function SliderMain({el,direction='horizontal'}:sliderMainProps) {
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
        className="mySwiper"
        >
        {el.map((el,i)=><SwiperSlide key={i}>{typeof(el) ==='string'? <img src={el}/>: el}</SwiperSlide>)}
        
      </Swiper>
        </>
    </div>
  );
}
