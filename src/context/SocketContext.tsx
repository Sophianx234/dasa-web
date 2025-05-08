
import { addNotification, removeOnlineUser, removeTypingUser, setOnlineUsers, setTypingUsers, setUserIsTyping } from "@/features/slices/navSlice";
import { sendAnonymousMessage, sendMessage } from "@/features/slices/userSlice";
import { useAppDispatch, useAppSelector } from "@/features/utils/hooks";
import { dmType, signupCredentialsExtended } from "@/services/apiServices";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

type SocketContextType = Socket | null;
const SocketContext = createContext<SocketContextType>(null);
type socketProviderProps = {
  children: ReactNode;
};

export type userIsTypingI = {
  userInfo: signupCredentialsExtended;
  type: "direct" | "channel";
  recipientId: string;
};

function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined)
    throw new Error("context was called outside of provider");
  return context;
}

function SocketProvider({ children }: socketProviderProps) {
  const dispatch = useAppDispatch();
  const [socket, setSocket] = useState<Socket | null>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout>|null>(null)
  const { user } = useAppSelector((store) => store.nav);
  const userInfo = user as signupCredentialsExtended;
  const typingTimeOut = 3000 
  // const serverURL = "http://localhost:8000"
  const serverURL = "https://dasa-api.onrender.com"
  useEffect(() => {
    if (userInfo) {
      const socketInstance = io(serverURL, {
        query: { userId: userInfo._id },
        reconnection: true,
        withCredentials: true,
        reconnectionAttempts: 5,
        transports: ["websocket"],
      });
      setSocket(socketInstance);

      // socket.current.on("receiveMessage", handleReceiveMessage);
      socketInstance.on("recieveAnonymous", (content) => {
        dispatch(sendAnonymousMessage(content));
      });
      socketInstance.on("recieveMessage", (message) => {
        console.log('xxxy',message)
        dispatch(sendMessage(message));
      });
      socketInstance.on("isTyping", (message:signupCredentialsExtended) => {
        console.log('xxxy',message)
        if(message){
          dispatch(setUserIsTyping(true));
          dispatch(setTypingUsers(message))

          if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current)
          }

          typingTimeoutRef.current = setTimeout(()=>{
            dispatch(setUserIsTyping(false))
            console.log('message x',message)
            dispatch(removeTypingUser(message._id))
          },typingTimeOut)
          
           


        }
      });
      socketInstance.on('isOnline',(message)=>{
        console.log('test',message)
        dispatch(setOnlineUsers(message))
      })
      socketInstance.on('isOffline',(message)=>{
        console.log('test',message)
        dispatch(removeOnlineUser(message))
      })
      socketInstance.on('recieveNotification',(message)=>{
        console.log('notification',message)
        dispatch(addNotification(message))
        
      })
      socketInstance.on("recieveFile", (message:dmType) => {
        console.log('xxxy',message)
        console.log('dddd',message.recipient)
        if(!message.recipient){

          dispatch(sendAnonymousMessage(message))
        }else{
          dispatch(sendMessage(message));

        }
      });

      return () => {
        if (socketInstance) {
          socketInstance.disconnect();
        }
      };
    }
  }, [userInfo,dispatch]);
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}

export { SocketProvider, useSocket };
