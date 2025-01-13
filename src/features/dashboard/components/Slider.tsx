import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
function Slider() {
  const sneakers = [
    { name: "Air Max 2024", brand: "Nike", src: "https://i.ibb.co/5T0GmMy/sneaker-2.png" },
    { name: "Ultra Boost X", brand: "Adidas", src: "https://i.ibb.co/F7K9fjg/sneaker-3.png" },
    { name: "RS-X Bold", brand: "Puma", src: "https://i.ibb.co/L5Z1hNM/sneaker-4.png" },
    { name: "Zig Kinetica Edge", brand: "Reebok", src: "https://i.ibb.co/PcPBVyC/sneaker-1.jpg" },
  ];
  
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {sneakers.map(sneaker=><SwiperSlide key={sneaker.brand} className='w-screen'>
        <img src={sneaker.src} className="w-full" key={sneaker.name} alt={sneaker.brand} />
        <p className='text-xs text-left font-bold  pt-1'>{sneaker.name}</p>
        <p className='font-poppins '>{sneaker.brand}</p>
      </SwiperSlide>)}
      
    </Swiper>
  );
};
   
export default Slider
