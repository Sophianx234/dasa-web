import { toggleChatMenu } from "@/features/slices/navSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { API_URL, signupCredentialsExtended } from "@/services/apiServices";
import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaMasksTheater } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ChatProfile from "./ChatProfile";
export type usersResponse = {
  totalUsers: number;
  users: signupCredentialsExtended[];
  user: signupCredentialsExtended
};
function ChatMenu() {
  const dispatch = useAppDispatch();
  const [users, setUsers] = useState<signupCredentialsExtended[] | null>(null);
  const {user} = useAppSelector(store=>store.nav)
  const userInfo = user as signupCredentialsExtended
  /* const profileImgs = [
    "https://i.ibb.co/tKPn0sJ/photo-25-2024-10-31-06-50-45.jpg",
    "https://i.ibb.co/jvRPsZd/photo-30-2024-10-31-06-51-41.jpg",
    "https://i.ibb.co/09h7ZjL/photo-26-2024-10-31-06-51-41.jpg",
    "https://i.ibb.co/LN31XS8/photo-6-2024-10-31-06-51-41.jpg",
    "https://i.ibb.co/xLJRnzX/photo-84-2024-10-31-06-52-36.jpg",
  ]; */
  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get(`${API_URL}/users`);
      const { users } = data as usersResponse;
      setUsers(users);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <motion.ul
        exit={{
          x: "100vw",
          opacity: 0,
        }}
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ type: "tween" }}
        className="menu bg-white lg:menu-horizontal rounded-box fixed z-40 inset-0 "
      >
        <div>
          <a className="flex  items-center mx-2 justify-between">
            <div onClick={() => dispatch(toggleChatMenu())}>
              <IoIosClose className="size-9 fill-gray-700 " />
            </div>

            <Link to='/dashboard/overview' className="fle " onClick={()=>dispatch(toggleChatMenu())}>
              <img
                src="https://i.ibb.co/n8hRM6d/dasalogo-removebg.png"
                className="w-16"
                alt=""
              />
            </Link>
          </a>
        </div>
        <div className="flex justify-between pr-6 pt-6">
          <h1 className="font-poppins text-2xl font-semibold text-slate-800 pl-5 pb-2">
            Chats
          </h1>
          <Link to="/dashboard/anonymous/write">
            <FaMasksTheater className="size-8 hover:scale-105" />
          </Link>
        </div>
        <div className=" ">
          {users?.map((user) => (
            user._id !== userInfo._id && <ChatProfile
              user= {user}
            />
          ))}
        </div>
      </motion.ul>
    </>
  );
}

export default ChatMenu;
