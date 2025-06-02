import { useGetAnonymous } from "@/features/utils/hooks";
import { anonymousResponse } from "@/services/apiServices";
import AnonymousTile from "./AnonymousTile";

type anosType ={
  
    _id: string,
    sender: {
        _id: string,
        anonymousProfile: string,
        anonymousName: string
    },
    anonymousName: string,
    content: string,
    createdAt: string

}
function AnonymousTiles() {
  const {isLoading,data} = useGetAnonymous(5)
  if(isLoading) return <>loading</>
  console.log('x123',data)
  if(data){
    const {anonymous:{messages}} = data as anonymousResponse
    console.log(messages)
    
    return (
      <div className="pt-5 ">
      <h1 className="px-5 ml-8 dash-title">Anonymous</h1>
{(messages as unknown as anosType[]).map(msg=>
<AnonymousTile
        to={msg.sender.anonymousName}
        key={msg._id}
        message={msg.content}
        time={msg.createdAt}
        title="Anonymous"
        />)}
      
    </div>
  );
}
}

export default AnonymousTiles;
