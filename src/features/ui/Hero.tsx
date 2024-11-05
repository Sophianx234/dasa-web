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
    height: string 
}
export type slidesImagesType = 
    {
        url: string,
        caption: string
    }

const spanStyle : spanStyleType = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle: divStyleType = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages: slidesImagesType[] = [
    {
      url: 'https://i.ibb.co/Yfy7hZR/photo-5-2024-10-31-06-51-41.jpg',
      caption: 'Slide 1'
    },
    {
      url: 'https://i.ibb.co/dg27dzH/photo-32-2024-10-31-06-53-18.jpg ',
      caption: 'Slide 2'
    },
    {
      url: 'https://i.ibb.co/k9Gh1t0/photo-52-2024-10-31-06-52-36.jpg',
      caption: 'Slide 3'
    },
    {
      url: 'https://i.ibb.co/Fn3jDbD/photo-51-2024-10-31-06-52-36.jpg',
      caption: 'Slide 4'
    },
    {
      url: 'https://i.ibb.co/XW5MRmH/photo-60-2024-10-31-06-52-36.jpg',
      caption: 'Slide 4'
    },
  ];
  
function Hero() {

    return (
        <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Hero
