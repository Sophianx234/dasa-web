import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export type spanStyleType = {
    padding: string,
    background: string,
    color: string
}
export type divStyleType = {
    display:string,
    alignItems: string,
    justifyContent: string,
    backgroundSize: string,
    backgroundPosition: string,
    height: string 
}
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
      url: 'https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg',
       
    },
    {
      url: 'https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg',
       
    },
  ];
  
function Hero() {

    return (
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className='
              flex
    items-center justify-center
    bg-cover
    bg-center
    max-h-[25rem] h-[25rem] lg:h-[50rem] lg:max-h-[30rem] ' style={{  'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Hero
