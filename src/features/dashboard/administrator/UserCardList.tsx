import { useGetusers } from "@/features/utils/hooks"
import { usersResponse } from "../chat/ChatMenu"
import UserCard from "./UserCard"

function UserCardList() {
  const {data,isLoading} = useGetusers()
  if(isLoading) return <>isLoading</>
  return (
    <div className=" flex flex-col items-center mx-4 space-y-2">
      {(data as usersResponse).users.map(user=><UserCard userInfo={user}/>)}
    </div>
  )
}

export default UserCardList
