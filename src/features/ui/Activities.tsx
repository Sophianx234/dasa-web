import SVGLite from "./SVGLite";
import VideoPlayer from "./VideoPlayer";

function Activities() {
   
    
      
      
      const slideImages: constslidesImagesType[] = [
        {
          url: 'https://i.ibb.co/z4Qb9CJ/das-1.jpg',
          
        },
       
      ];
    return (
        <div className="py-10 pb-20 ">
            <h1 className="text-center font-bold font-rethink">Experience the Fun with Us</h1>
            <p className="text-center px-2 text-sm font-Poppins pt-1 pb-4">Join the Fun! Where Culture, Friendship, and Growth Come Alive</p>
            <div className="pt-2 flex justify-center flex-col ">
              <div>

              <SVGLite type='sticks'/>
              </div>
                <div className=" w-full items-center space-y-6 flex flex-col pt-10">

                <VideoPlayer src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/das-x.MOV?t=2024-11-07T14%3A20%3A02.433Z"/>
                <VideoPlayer  src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/dasa-12.mp4" />
                <VideoPlayer  src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/dasa-3.MOV"/>
                <VideoPlayer  src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/dasa-2.MOV"/>
                </div>
<p className="text-center text-sm font-chewy pt-10 ">Laughter, Community, and Lifelong <br /> Memories.</p>
            </div>
        </div>
    )
}

export default Activities
