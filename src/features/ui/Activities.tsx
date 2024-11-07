import VideoPlayer from "./VideoPlayer";

function Activities() {
   
    
      
      
      const slideImages: constslidesImagesType[] = [
        {
          url: 'https://i.ibb.co/z4Qb9CJ/das-1.jpg',
          
        },
       
      ];
    return (
        <div className="py-10">
            <h1 className="text-center font-bold font-rethink">Experience the Fun with Us</h1>
            <div className="pt-2 flex justify-center flex-col ">
                <div className=" w-full items-center space-y-6 flex flex-col">

                <VideoPlayer src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/IMG_8063%20(2).MOV?t=2024-11-07T06%3A20%3A51.890Z"/>
                <VideoPlayer  src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/VID-20240205-WA0108.mp4" />
                <VideoPlayer  src="https://cwpgmkocgvfhkpwjntrl.supabase.co/storage/v1/object/public/dasa-video/IMG_8065%20(2).MOV"/>
                </div>

            </div>
        </div>
    )
}

export default Activities
