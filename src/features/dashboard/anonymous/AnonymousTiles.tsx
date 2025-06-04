import { useGetAnonymous } from "@/features/utils/hooks";
import { anonymousResponse } from "@/services/apiServices";
import AnonymousTile from "./AnonymousTile";
import AnonymousTileSkeleton from "@/skeletons/AnonymousTileSkeleton";

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
  if(data){
    const {anonymous:{messages}} = data as anonymousResponse
    
    return (
      <div className="pt-5 ">
      <h1 className="px-5 ml-8 dash-title">Anonymous</h1>
 {messages && (messages as unknown as anosType[]).map(msg=>
<AnonymousTile
        to={msg.sender.anonymousName}
        key={msg._id}
        message={msg.content}
        time={msg.createdAt}
        title="Anonymous"
        />)} 
        {isLoading && Array.from({length:2},(_,i)=><AnonymousTileSkeleton key={i}/>)}
        
      
    </div>
  );
}
}

export default AnonymousTiles;
