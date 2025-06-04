import { useGetusers } from "@/features/utils/hooks";
import { usersResponse } from "../chat/ChatMenu";
import UserCard from "./UserCard";
import UserCardSkeleton from "@/skeletons/UserCardSkeleton";

function UserCardList() {
  const { data, isLoading } = useGetusers();
  return (
    <div className=" flex flex-col items-center mx-4 space-y-2 pb-28">
      {data &&(data as usersResponse).users.map((user) => (
        <UserCard userInfo={user}  />
      ))}
      {isLoading && Array.from({length:3},(_,i)=><UserCardSkeleton key={i}/>)}
    </div>
  );
}

export default UserCardList;
