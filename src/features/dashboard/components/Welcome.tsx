import { getUser } from "@/services/apiServices"
import { useQuery } from "@tanstack/react-query"

function Welcome() {
  const {data:user,isLoading,error} = useQuery({
    queryKey: ['user'],
    queryFn: getUser
  })
  
  if(isLoading) return <>loading</>
  console.log(user)
    return (
        <div className="border-2 mx-4 my-6 shadow-md rounded-md ">
          <div className="px-2 py-2 pb-7">
            <div className="overflow-hidden flex justify-center  ">

          <img className="  w-full" src="https://i.ibb.co/YtfKtdq/photo-79-2024-10-31-06-52-36.jpg" alt="photo-79-2024-10-31-06-52-36" />
            </div>
            <h1 className=" font-mulish font-bold text-lg  pt-4">Hey {user?.firstName} 👋</h1>
            <p className="font-poppins tracking-wide text-sm py-1 pb-2  ">
            Here’s everything you need to know about DaSA today!</p>
            <div className="flex items-center justify-center gap-16">
                <p className="flex flex-col   text-center"><span className="font-bold font-Montserrat text-lg">
                83</span>  <span className="font-poppins font-medium text-sm tracking-wide  leading-4">Anonymous <br /> Messages</span></p>
            
                <p className="flex flex-col text-center"><span className="font-bold font-Montserrat text-lg">
                83</span> <span className="font-poppins font-medium text-sm tracking-wide  leading-4">Anonymous <br /> Messages</span></p>
            </div>
            
          </div>
        </div>
    )
}

export default Welcome
