import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export type slidesImagesType = 
    {
        url: string,
        
    }

  
  
  const slideImages: slidesImagesType[] = [
    {
      url: 'https://i.ibb.co/z4Qb9CJ/das-1.jpg',
      
    },
    {
      url: 'https://i.ibb.co/Yfy7hZR/photo-5-2024-10-31-06-51-41.jpg',
      
    },
    {
      url: 'https://i.ibb.co/dg27dzH/photo-32-2024-10-31-06-53-18.jpg '
       
    },
    {
      url: 'https://i.ibb.co/k9Gh1t0/photo-52-2024-10-31-06-52-36.jpg',
      
    },
    {
      url: 'https://i.ibb.co/ns2h563/photo-46-2024-10-31-06-50-45.jpg',
      
    },
    {
      url: 'https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg',
       
    },
    {
      url: 'https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg',
       
    },
  ];
  
function Hero() {

    return (
      <div className='relative'>
        <div className="slide-container mt-[5.6rem] ">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index} className='bg-[#0000009d]'>
              <div className='
              flex
    items-center justify-center
    bg-cover
    bg-center
    max-h-[25rem] h-[25rem] lg:h-[50rem] lg:max-h-[30rem] mix-blend-overlay' style={{  'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
        <div className='text-[#ffe8cbbd] absolute  top-[11.5rem] left-0 right-0 flex justify-center text-center font-extrabold   font-Montserrat text-3xl  '>Dagbon Tooni Tibu <br />  Shikuru Bihi Nuu Beni</div>
      </div>
      <div className='pt-10 bg-dasalight uppercase text-xs pb-8 font-mulish px-1 '>
        <h1 className='font-bold text-center text-[#33312e]'>Your gateway to a world of networking, mentorship, and cultural exchange.</h1>
      </div>
          </div>
    )
}

export default Hero
